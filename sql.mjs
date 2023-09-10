import postgres from "postgres";

const sql = postgres({
  /* options */
}); // will use psql environment variables

export { sql };
// https://github.com/porsager/postgres#connection
