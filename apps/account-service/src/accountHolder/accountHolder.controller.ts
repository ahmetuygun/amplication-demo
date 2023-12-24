import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { AccountHolderService } from "./accountHolder.service";
import { AccountHolderControllerBase } from "./base/accountHolder.controller.base";

@swagger.ApiTags("accountHolders")
@common.Controller("accountHolders")
export class AccountHolderController extends AccountHolderControllerBase {
  constructor(
    protected readonly service: AccountHolderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
