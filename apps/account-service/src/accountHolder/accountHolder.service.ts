import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { AccountHolderServiceBase } from "./base/accountHolder.service.base";

@Injectable()
export class AccountHolderService extends AccountHolderServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
