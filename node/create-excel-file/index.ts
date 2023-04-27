import * as XLSX from "xlsx"
import * as fs from "fs"
XLSX.set_fs(fs)

async function main() {
    const rows = [
        {
            name: "Test User",
            birtday: "2000-01-01"
        }
    ]

    const worksheet = XLSX.utils.json_to_sheet(rows)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Dates")

    XLSX.writeFile(workbook, "test.xlsx", {})
}

main().catch(console.error)