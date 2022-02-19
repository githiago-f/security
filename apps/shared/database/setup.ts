export const createDatabase = (connection, database) => {
  connection.query(`CREATE DATABASE IF NOT EXISTS ${database}`);
};
