import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Startup {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  email: string;

  @Column()
  Telefone: string;
  
  @Column()
  siteStartup: string;
  
  @Column()
  isFormalizada: string;
  
  @Column()
  idUff: number;
  
  @Column()
  idCidade: number;
  
  @Column()
  tipoNegocio: string;
  
  @Column()
  DataFundacao: Date;
  
/**
 * 
Telefone
siteStartup
DataFundacao
isFormalizada
idUff
idCidade
tipoNegocio
 */
  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
