import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStartupDto } from './dto/create-startup.dto';
import { UpdateStartupDto } from './dto/update-startup.dto';
import { Startup } from './entities/startup.entity';

@Injectable()
export class StartupService {
  constructor(
    @InjectRepository(Startup)
    private startupRepo: Repository<Startup>,
  ) {}

  public create(createStartupDto: CreateStartupDto): Promise<Startup> {
    /*
      @Entity()
      class User {
        @PrimaryGeneratedColumn()
        id: number;
        @Column()
        email: string
        @Column()
        name: string;
        @Column()
        home: string;
        @Column()
        address: string;
      }
    */
    // const userDto = { password, email, name, home, address };
    // const newUser = new User();
    // newUser.email = userDto.email;
    // const newUser = this.userRepo.create({
    //   email: userDto.emailComoVeio,
    // })
    // rest === { password, name, home, address }
    const newStartup = new Startup();
    for (const key in createStartupDto) {
      newStartup[key] = createStartupDto[key];
    }
    return this.startupRepo.save(newStartup);
  }

  public findAll(): Promise<Startup[]> {
    return this.startupRepo.find();
  }

  public findOne(id: number): Promise<Startup> {
    return this.startupRepo.findOne(id);
  }

  update(id: number, updateStartupDto: UpdateStartupDto) {
    return `This action updates a #${id} startup`;
  }

  async remove(id: number) {
    await this.startupRepo.softDelete(id);
    return id;
  }
}
