import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('company')
export class Company extends BaseEntity {

	@PrimaryGeneratedColumn({
		type: 'int',
		name: 'id',
	})
	public id: number

	@Column('varchar', {
		nullable: true,
		length: 100,
		name: 'name',
	})
	public name?: string|null

	@Column('varchar', {
		nullable: true,
		length: 50,
		name: 'phone',
	})
	public phone?: string|null

	@Column('text', {
		nullable: true,
		name: '신주소',
	})
	public 신주소?: string|null

	@Column('varchar', {
		nullable: true,
		length: 300,
		name: 'address2',
	})
	public address2?: string|null

	@Column('varchar', {
		nullable: true,
		length: 19,
		name: 'pnu',
	})
	public pnu?: string|null

	@Column('varchar', {
		nullable: true,
		length: 10,
		name: 'bcode',
	})
	public bcode?: string|null

	@Column('text', {
		nullable: true,
		name: 'zb_memo',
		})
	public zbMemo?: string|null

	@Column('varchar', {
		nullable: true,
		length: 10,
		name: 'status',
	})
	public status?: string|null

	@Column({
		type: Boolean,
		nullable: true,
		width: 1,
		name: 'enabled',
	})
	public enabled?: boolean|null

	@Column('datetime', {
		nullable: true,
		name: 'checked_at',
	})
	public checkedAt?: Date|null

	@Column('int', {
		nullable: true,
		name: 'checked_user_no',
	})
	public checkedUserNo?: number|null

	@Column('datetime', {
		name: 'created_at',
		default: () => 'CURRENT_TIMESTAMP',
	})
	public createdAt: Date = new Date()

	@Column('datetime', {
		name: 'updated_at',
		default: () => 'CURRENT_TIMESTAMP',
	})
	public updatedAt: Date = new Date()

	@Column('int', {
		nullable: true,
		name: 'zb_user_no',
	})
	public zbUserNo?: number|null
}