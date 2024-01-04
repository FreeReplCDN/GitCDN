import postgres from "postgres";
const { SQL_URL } = process.env;

const sql = postgres(SQL_URL, {
  /* options */
}); // will use psql environment variables

export { sql };
// https://github.com/porsager/postgres#connection
