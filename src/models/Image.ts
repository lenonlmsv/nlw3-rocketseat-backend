import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn} from 'typeorm'
import Orphanage from './Orphanages';

@Entity('images')

export default class images {
    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    path: string;

    @ManyToOne(() => Orphanage, orphanage => orphanage.images)
    @JoinColumn({ name: 'Orphanage_id'} )
    orphanage: Orphanage;
}