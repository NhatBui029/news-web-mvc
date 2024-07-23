import prisma from "../../src/libs/db-client";
import { faker } from '@faker-js/faker';
const bcrypt = require("bcrypt");
import {Role} from '../../src/services/user'

export default async function userAdminSeed() {
    console.log('log seed')
    await prisma.user.create({
        data: {
            email: faker.internet.email(),
            password: await bcrypt.hash('123', 10),
            name: 'Theodore Bui',
            role: Role.ADMIN
        }
    })
}