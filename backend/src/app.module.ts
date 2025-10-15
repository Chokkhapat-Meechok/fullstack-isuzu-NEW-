import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost', // ถ้าใช้ XAMPP หรือ WAMP ก็ไม่ต้องแก้
      port: 3306,
      username: 'root',
      password: '', // ถ้ามีรหัสผ่านใน MySQL ให้ใส่ตรงนี้
      database: 'fullstack_db',
      autoLoadEntities: true,
      synchronize: true, // ให้มันสร้างตารางให้อัตโนมัติ
    }),
  ],
})
export class AppModule {}
