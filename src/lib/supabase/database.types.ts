import { Database as nextAuth } from "./nextAuth.types"
import { Database as publicDatabase } from "./public.types"

type Database = nextAuth & publicDatabase

export default Database