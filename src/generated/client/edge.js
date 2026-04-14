
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.22.0
 * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
 */
Prisma.prismaVersion = {
  client: "5.22.0",
  engine: "605197351a3c8bdd595af2d2a9bc3025bca48ea2"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}





/**
 * Enums
 */
exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.CategoriesScalarFieldEnum = {
  category_id: 'category_id',
  category_name: 'category_name',
  color: 'color',
  created_at: 'created_at',
  updated_at: 'updated_at',
  icon: 'icon'
};

exports.Prisma.DivisionsScalarFieldEnum = {
  division_id: 'division_id',
  division_name: 'division_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.RolesScalarFieldEnum = {
  role_id: 'role_id',
  role_name: 'role_name',
  permissions: 'permissions',
  description: 'description',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ticket_documentsScalarFieldEnum = {
  ticket_document_id: 'ticket_document_id',
  ticket_id: 'ticket_id',
  file_name: 'file_name',
  file_path: 'file_path',
  file_size: 'file_size',
  file_extension: 'file_extension',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ticket_prioritiesScalarFieldEnum = {
  ticket_priority_id: 'ticket_priority_id',
  ticket_priority_name: 'ticket_priority_name',
  color: 'color',
  icon: 'icon',
  is_default: 'is_default',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.Ticket_reply_documentsScalarFieldEnum = {
  ticket_reply_document_id: 'ticket_reply_document_id',
  ticket_reply_id: 'ticket_reply_id',
  file_name: 'file_name',
  file_path: 'file_path',
  file_size: 'file_size',
  file_extension: 'file_extension',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ticket_replysScalarFieldEnum = {
  ticket_reply_id: 'ticket_reply_id',
  ticket_id: 'ticket_id',
  ticket_status_id: 'ticket_status_id',
  pic_user_id: 'pic_user_id',
  reply_description: 'reply_description',
  ticket_attch: 'ticket_attch',
  created_at: 'created_at'
};

exports.Prisma.Ticket_statusesScalarFieldEnum = {
  ticket_status_id: 'ticket_status_id',
  ticket_name: 'ticket_name',
  color: 'color',
  is_default: 'is_default',
  deleted_at: 'deleted_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.Ticket_typesScalarFieldEnum = {
  ticket_type_id: 'ticket_type_id',
  ticket_type_name: 'ticket_type_name',
  created_at: 'created_at',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.TicketsScalarFieldEnum = {
  ticket_id: 'ticket_id',
  ticket_number: 'ticket_number',
  ticket_subject: 'ticket_subject',
  ticket_detail: 'ticket_detail',
  requestor_name: 'requestor_name',
  ticket_type_id: 'ticket_type_id',
  category_id: 'category_id',
  division_id: 'division_id',
  ticket_priority_id: 'ticket_priority_id',
  ticket_status_id: 'ticket_status_id',
  ticket_attach: 'ticket_attach',
  ticket_start_date: 'ticket_start_date',
  ticket_end_date: 'ticket_end_date',
  created_user_id: 'created_user_id',
  created_at: 'created_at',
  updated_user_id: 'updated_user_id',
  updated_at: 'updated_at',
  deleted_at: 'deleted_at'
};

exports.Prisma.UsersScalarFieldEnum = {
  user_id: 'user_id',
  user_name: 'user_name',
  full_name: 'full_name',
  email: 'email',
  password: 'password',
  role_id: 'role_id',
  is_active: 'is_active',
  verify_token: 'verify_token',
  login_at: 'login_at',
  logout_at: 'logout_at',
  created_at: 'created_at',
  updated_at: 'updated_at'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.ticket_replys_ticket_attch = exports.$Enums.ticket_replys_ticket_attch = {
  Y: 'Y',
  N: 'N'
};

exports.tickets_ticket_attach = exports.$Enums.tickets_ticket_attach = {
  Y: 'Y',
  N: 'N'
};

exports.Prisma.ModelName = {
  categories: 'categories',
  divisions: 'divisions',
  roles: 'roles',
  ticket_documents: 'ticket_documents',
  ticket_priorities: 'ticket_priorities',
  ticket_reply_documents: 'ticket_reply_documents',
  ticket_replys: 'ticket_replys',
  ticket_statuses: 'ticket_statuses',
  ticket_types: 'ticket_types',
  tickets: 'tickets',
  users: 'users'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\laragon\\www\\e-ticketing\\src\\generated\\client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\laragon\\www\\e-ticketing\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "5.22.0",
  "engineVersion": "605197351a3c8bdd595af2d2a9bc3025bca48ea2",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mysql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "generator client {\n  provider = \"prisma-client-js\"\n  output   = \"../src/generated/client\"\n}\n\ndatasource db {\n  provider = \"mysql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel categories {\n  category_id   Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  category_name String    @unique(map: \"categories_unique\") @db.VarChar(100)\n  color         String    @db.VarChar(10)\n  created_at    DateTime? @db.DateTime(0)\n  updated_at    DateTime? @db.DateTime(0)\n  icon          String?   @db.VarChar(50)\n  tickets       tickets[]\n}\n\nmodel divisions {\n  division_id   Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  division_name String    @unique(map: \"divisions_unique\") @db.VarChar(100)\n  created_at    DateTime  @default(now()) @db.DateTime(0)\n  updated_at    DateTime? @db.DateTime(0)\n  deleted_at    DateTime? @db.DateTime(0)\n  tickets       tickets[]\n}\n\n/// This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\nmodel roles {\n  role_id     Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  role_name   String    @unique(map: \"roles_unique\") @db.VarChar(60)\n  permissions String?   @db.LongText\n  description String?   @db.Text\n  created_at  DateTime? @db.Timestamp(0)\n  updated_at  DateTime? @db.Timestamp(0)\n  users       users[]\n}\n\nmodel ticket_documents {\n  ticket_document_id BigInt    @id @default(autoincrement()) @db.UnsignedBigInt\n  ticket_id          BigInt    @db.UnsignedBigInt\n  file_name          String    @unique(map: \"ticket_documents_unique\") @db.VarChar(255)\n  file_path          String    @db.VarChar(500)\n  file_size          Int?\n  file_extension     String?   @db.VarChar(10)\n  created_at         DateTime? @db.Timestamp(0)\n  updated_at         DateTime? @db.Timestamp(0)\n  tickets            tickets   @relation(fields: [ticket_id], references: [ticket_id], onDelete: Cascade, onUpdate: NoAction, map: \"ticket_documents_tickets_FK\")\n\n  @@index([ticket_id], map: \"ticket_documents_tickets_FK\")\n}\n\nmodel ticket_priorities {\n  ticket_priority_id   Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  ticket_priority_name String    @unique(map: \"ticket_priorities_unique\") @db.VarChar(100)\n  color                String?   @db.VarChar(100)\n  icon                 String?   @db.VarChar(50)\n  is_default           Boolean?  @default(false)\n  created_at           DateTime  @default(now()) @db.DateTime(0)\n  updated_at           DateTime? @db.DateTime(0)\n  deleted_at           DateTime? @db.DateTime(0)\n  tickets              tickets[]\n}\n\nmodel ticket_reply_documents {\n  ticket_reply_document_id BigInt        @id @default(autoincrement()) @db.UnsignedBigInt\n  ticket_reply_id          BigInt        @db.UnsignedBigInt\n  file_name                String        @unique(map: \"ticket_reply_documents_unique\") @db.VarChar(255)\n  file_path                String        @db.VarChar(500)\n  file_size                Int?\n  file_extension           String?       @db.VarChar(10)\n  created_at               DateTime?     @db.Timestamp(0)\n  updated_at               DateTime?     @db.Timestamp(0)\n  ticket_replys            ticket_replys @relation(fields: [ticket_reply_id], references: [ticket_reply_id], onDelete: Cascade, onUpdate: NoAction, map: \"ticket_reply_documents_reply_FK\")\n\n  @@index([ticket_reply_id], map: \"ticket_reply_documents_reply_FK\")\n}\n\nmodel ticket_replys {\n  ticket_reply_id        BigInt                     @id @default(autoincrement()) @db.UnsignedBigInt\n  ticket_id              BigInt                     @db.UnsignedBigInt\n  ticket_status_id       Int                        @db.UnsignedTinyInt\n  pic_user_id            BigInt                     @db.UnsignedBigInt\n  reply_description      String?                    @db.LongText\n  ticket_attch           ticket_replys_ticket_attch @default(N)\n  created_at             DateTime?                  @db.DateTime(0)\n  ticket_statuses        ticket_statuses            @relation(fields: [ticket_status_id], references: [ticket_status_id], onUpdate: Restrict, map: \"ticket_replys_ticket_statuses_FK\")\n  tickets                tickets                    @relation(fields: [ticket_id], references: [ticket_id], onDelete: Cascade, onUpdate: Restrict, map: \"ticket_replys_tickets_FK\")\n  users                  users                      @relation(fields: [pic_user_id], references: [user_id], onUpdate: Restrict, map: \"ticket_replys_users_FK\")\n  ticket_reply_documents ticket_reply_documents[]\n\n  @@index([ticket_status_id], map: \"ticket_replys_ticket_statuses_FK\")\n  @@index([ticket_id], map: \"ticket_replys_tickets_FK\")\n  @@index([pic_user_id], map: \"ticket_replys_users_FK\")\n}\n\nmodel ticket_statuses {\n  ticket_status_id Int             @id @default(autoincrement()) @db.UnsignedTinyInt\n  ticket_name      String          @unique(map: \"ticket_statuses_unique\") @db.VarChar(255)\n  color            String          @default(\"#cecece\") @db.VarChar(255)\n  is_default       Boolean         @default(false)\n  deleted_at       DateTime?       @db.Timestamp(0)\n  created_at       DateTime?       @db.Timestamp(0)\n  updated_at       DateTime?       @db.Timestamp(0)\n  ticket_replys    ticket_replys[]\n  tickets          tickets[]\n}\n\nmodel ticket_types {\n  ticket_type_id   Int       @id @default(autoincrement()) @db.UnsignedTinyInt\n  ticket_type_name String    @unique(map: \"ticket_types_unique\") @db.VarChar(100)\n  created_at       DateTime  @default(now()) @db.DateTime(0)\n  updated_at       DateTime? @db.DateTime(0)\n  deleted_at       String?   @db.VarChar(100)\n  tickets          tickets[]\n}\n\nmodel tickets {\n  ticket_id                            BigInt                @id @default(autoincrement()) @db.UnsignedBigInt\n  ticket_number                        String                @unique(map: \"tickets_unique\") @db.VarChar(180)\n  ticket_subject                       String                @db.VarChar(250)\n  ticket_detail                        String?               @db.LongText\n  requestor_name                       String                @db.VarChar(150)\n  ticket_type_id                       Int                   @db.UnsignedTinyInt\n  category_id                          Int                   @db.UnsignedTinyInt\n  division_id                          Int                   @db.UnsignedTinyInt\n  ticket_priority_id                   Int                   @db.UnsignedTinyInt\n  ticket_status_id                     Int                   @db.UnsignedTinyInt\n  ticket_attach                        tickets_ticket_attach @default(N)\n  ticket_start_date                    DateTime?             @db.DateTime(0)\n  ticket_end_date                      DateTime?             @db.DateTime(0)\n  created_user_id                      BigInt                @db.UnsignedBigInt\n  created_at                           DateTime?             @db.DateTime(0)\n  updated_user_id                      BigInt?               @db.UnsignedBigInt\n  updated_at                           DateTime?             @db.DateTime(0)\n  deleted_at                           DateTime?             @db.DateTime(0)\n  ticket_documents                     ticket_documents[]\n  ticket_replys                        ticket_replys[]\n  categories                           categories            @relation(fields: [category_id], references: [category_id], onUpdate: Restrict, map: \"tickets_categories_FK\")\n  divisions                            divisions             @relation(fields: [division_id], references: [division_id], onUpdate: Restrict, map: \"tickets_divisions_FK\")\n  ticket_priorities                    ticket_priorities     @relation(fields: [ticket_priority_id], references: [ticket_priority_id], onUpdate: Restrict, map: \"tickets_ticket_priorities_FK\")\n  ticket_statuses                      ticket_statuses       @relation(fields: [ticket_status_id], references: [ticket_status_id], onUpdate: Restrict, map: \"tickets_ticket_statuses_FK\")\n  ticket_types                         ticket_types          @relation(fields: [ticket_type_id], references: [ticket_type_id], onUpdate: Restrict, map: \"tickets_ticket_types_FK\")\n  users_tickets_created_user_idTousers users                 @relation(\"tickets_created_user_idTousers\", fields: [created_user_id], references: [user_id], onUpdate: Restrict, map: \"tickets_users_created_FK\")\n  users_tickets_updated_user_idTousers users?                @relation(\"tickets_updated_user_idTousers\", fields: [updated_user_id], references: [user_id], onDelete: Restrict, onUpdate: Restrict, map: \"tickets_users_updated_FK\")\n\n  @@index([category_id], map: \"tickets_categories_FK\")\n  @@index([created_user_id], map: \"tickets_created_users_FK\")\n  @@index([division_id], map: \"tickets_divisions_FK\")\n  @@index([ticket_priority_id], map: \"tickets_ticket_priorities_FK\")\n  @@index([ticket_status_id], map: \"tickets_ticket_statuses_FK\")\n  @@index([ticket_type_id], map: \"tickets_ticket_types_FK\")\n  @@index([updated_user_id], map: \"tickets_updated_users_FK\")\n}\n\nmodel users {\n  user_id                                BigInt          @id @default(autoincrement()) @db.UnsignedBigInt\n  user_name                              String          @unique(map: \"users_unique\") @db.VarChar(80)\n  full_name                              String          @db.VarChar(150)\n  email                                  String          @db.VarChar(150)\n  password                               String          @db.Text\n  role_id                                Int             @db.UnsignedTinyInt\n  is_active                              Boolean         @default(true)\n  verify_token                           String?         @db.Text\n  login_at                               DateTime?       @db.DateTime(0)\n  logout_at                              DateTime?       @db.DateTime(0)\n  created_at                             DateTime        @default(now()) @db.DateTime(0)\n  updated_at                             DateTime?       @db.DateTime(0)\n  ticket_replys                          ticket_replys[]\n  tickets_tickets_created_user_idTousers tickets[]       @relation(\"tickets_created_user_idTousers\")\n  tickets_tickets_updated_user_idTousers tickets[]       @relation(\"tickets_updated_user_idTousers\")\n  roles                                  roles           @relation(fields: [role_id], references: [role_id], onUpdate: Restrict, map: \"users_roles_FK\")\n\n  @@index([role_id], map: \"users_roles_FK\")\n}\n\nenum ticket_replys_ticket_attch {\n  Y\n  N\n}\n\nenum tickets_ticket_attach {\n  Y\n  N\n}\n",
  "inlineSchemaHash": "4dc57d951adc5bda67c333f6fcb3187c446404fd4412d93b201a4e1c80cd7198",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"categories\":{\"dbName\":null,\"fields\":[{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"categoriesTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"divisions\":{\"dbName\":null,\"fields\":[{\"name\":\"division_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"division_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"divisionsTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"roles\":{\"dbName\":null,\"fields\":[{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"permissions\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"rolesTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false,\"documentation\":\"This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.\"},\"ticket_documents\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_document_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_extension\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"ticket_documentsTotickets\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"ticket_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket_priorities\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_priority_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_priority_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"icon\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"ticket_prioritiesTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket_reply_documents\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_reply_document_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_reply_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_path\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_size\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"file_extension\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_replys\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_replys\",\"relationName\":\"ticket_reply_documentsToticket_replys\",\"relationFromFields\":[\"ticket_reply_id\"],\"relationToFields\":[\"ticket_reply_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket_replys\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_reply_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"pic_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"reply_description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_attch\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"ticket_replys_ticket_attch\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_statuses\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_statuses\",\"relationName\":\"ticket_replysToticket_statuses\",\"relationFromFields\":[\"ticket_status_id\"],\"relationToFields\":[\"ticket_status_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"ticket_replysTotickets\",\"relationFromFields\":[\"ticket_id\"],\"relationToFields\":[\"ticket_id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"ticket_replysTousers\",\"relationFromFields\":[\"pic_user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_reply_documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_reply_documents\",\"relationName\":\"ticket_reply_documentsToticket_replys\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket_statuses\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"color\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"#cecece\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_default\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":false,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_replys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_replys\",\"relationName\":\"ticket_replysToticket_statuses\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"ticket_statusesTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ticket_types\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_type_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"ticket_typesTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"tickets\":{\"dbName\":null,\"fields\":[{\"name\":\"ticket_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_number\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_subject\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_detail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"requestor_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_type_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"category_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"division_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_priority_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_status_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_attach\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"tickets_ticket_attach\",\"default\":\"N\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_start_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_end_date\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"BigInt\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"deleted_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_documents\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_documents\",\"relationName\":\"ticket_documentsTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_replys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_replys\",\"relationName\":\"ticket_replysTotickets\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categories\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"categories\",\"relationName\":\"categoriesTotickets\",\"relationFromFields\":[\"category_id\"],\"relationToFields\":[\"category_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"divisions\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"divisions\",\"relationName\":\"divisionsTotickets\",\"relationFromFields\":[\"division_id\"],\"relationToFields\":[\"division_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_priorities\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_priorities\",\"relationName\":\"ticket_prioritiesTotickets\",\"relationFromFields\":[\"ticket_priority_id\"],\"relationToFields\":[\"ticket_priority_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_statuses\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_statuses\",\"relationName\":\"ticket_statusesTotickets\",\"relationFromFields\":[\"ticket_status_id\"],\"relationToFields\":[\"ticket_status_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_types\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_types\",\"relationName\":\"ticket_typesTotickets\",\"relationFromFields\":[\"ticket_type_id\"],\"relationToFields\":[\"ticket_type_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users_tickets_created_user_idTousers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"tickets_created_user_idTousers\",\"relationFromFields\":[\"created_user_id\"],\"relationToFields\":[\"user_id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"users_tickets_updated_user_idTousers\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"users\",\"relationName\":\"tickets_updated_user_idTousers\",\"relationFromFields\":[\"updated_user_id\"],\"relationToFields\":[\"user_id\"],\"relationOnDelete\":\"Restrict\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"users\":{\"dbName\":null,\"fields\":[{\"name\":\"user_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"BigInt\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"full_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"is_active\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"verify_token\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"login_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"logout_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"created_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updated_at\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ticket_replys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ticket_replys\",\"relationName\":\"ticket_replysTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets_tickets_created_user_idTousers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"tickets_created_user_idTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tickets_tickets_updated_user_idTousers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"tickets\",\"relationName\":\"tickets_updated_user_idTousers\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"roles\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"roles\",\"relationName\":\"rolesTousers\",\"relationFromFields\":[\"role_id\"],\"relationToFields\":[\"role_id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"ticket_replys_ticket_attch\":{\"values\":[{\"name\":\"Y\",\"dbName\":null},{\"name\":\"N\",\"dbName\":null}],\"dbName\":null},\"tickets_ticket_attach\":{\"values\":[{\"name\":\"Y\",\"dbName\":null},{\"name\":\"N\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

