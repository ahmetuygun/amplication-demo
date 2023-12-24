import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { AccountHolderModuleBase } from "./base/accountHolder.module.base";
import { AccountHolderService } from "./accountHolder.service";
import { AccountHolderController } from "./accountHolder.controller";
import { AccountHolderResolver } from "./accountHolder.resolver";

@Module({
  imports: [AccountHolderModuleBase, forwardRef(() => AuthModule)],
  controllers: [AccountHolderController],
  providers: [AccountHolderService, AccountHolderResolver],
  exports: [AccountHolderService],
})
export class AccountHolderModule {}
