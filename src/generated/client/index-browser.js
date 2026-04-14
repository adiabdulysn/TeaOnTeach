
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


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

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.NotFoundError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`NotFoundError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

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
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
