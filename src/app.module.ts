import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthModule } from "./auth/auth.module";



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '7025',
      database: 'db_test',
      autoLoadEntities: true,
      synchronize: true
    }),
    AuthModule
  ]
})

export class AppModule {
  constructor(){
    console.log("db connected 💕💕💕💕")
  }
}