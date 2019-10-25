import { Project } from 'ts-morph'
import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const project = new Project({
    tsConfigFilePath: "tsconfig.json",
})

rl.question("Entity file to transform: ", (name) => {
    if (!fs.existsSync(path.resolve(name))) {
        process.stdout.write(`file not found: ${name}`)
        process.exit()
    }

    const file = project.getSourceFile(name)

    const importStatements = file!.getImportDeclarations()

    importStatements.forEach((statement) => statement.remove())

    const [entityClass] = file!.getClasses()

    if (!entityClass) {
        process.stdout.write('file should have at least one class!')
        process.exit()
    }

    entityClass.removeExtends()

    const entityDecorator = entityClass.getDecorator('Entity')

    if (entityDecorator) {
        entityDecorator.remove()
    }

    const props = entityClass.getProperties()

    for (const prop of props) {
        const decorators = prop.getDecorators()
        for (const decorator of decorators) {
            decorator.remove()
        }
    }

    fs.writeFileSync(path.resolve(`${name}_transformed_${new Date().toISOString()}.ts`), file!.getFullText().replace(/\n\n/g, '\n'), { encoding: 'utf-8' })

    process.stdout.write('file transformed!')

    rl.close()
})