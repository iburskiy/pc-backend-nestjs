## Description

Project started from [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Nest Generator examples
`nest g resource --flat` - generates `module`, `service`, `controller` with all CRUD ops, `entity`, `dto` in `.`. Universal method.

`nest g module lookup --flat` - generates Module in `.`. Make `cd` to the folder you need.

To generate `module`, `controller` and `service` togeather, run commands in the following order:
`nest g module lookup --flat`
`nest g controller lookup --flat`
`nest g service lookup --flat`
It will update the module to inject the controller and service.
```
import { Module } from '@nestjs/common';
import { LookupController } from './lookup.controller';
import { LookupService } from './lookup.service';

@Module({
  controllers: [LookupController],
  providers: [LookupService]
})
export class LookupModule {}
```