import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AccountHolderResolverBase } from "./base/accountHolder.resolver.base";
import { AccountHolder } from "./base/AccountHolder";
import { AccountHolderService } from "./accountHolder.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => AccountHolder)
export class AccountHolderResolver extends AccountHolderResolverBase {
  constructor(
    protected readonly service: AccountHolderService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
