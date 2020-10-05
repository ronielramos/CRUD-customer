import neo4j from 'neo4j-driver'

const DB_URL = process.env.DB_URL || ''
const DB_USERNAME = process.env.DB_USERNAME || ''
const DB_PASSWORD = process.env.DB_PASSWORD || ''

const neo4jDriver = neo4j.driver(
  DB_URL,
  neo4j.auth.basic(DB_USERNAME, DB_PASSWORD)
)

export default neo4jDriver
