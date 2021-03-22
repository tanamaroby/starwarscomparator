import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import "./Row.css";

const CreateRow = (information) => {

    const info = {
      name: (information.name == null || information.name == undefined) ? "Unable to find" : information.name,
      height: (information.height == null || information.height == undefined) ? "Unable to find" : information.height, 
      mass: (information.mass == null || information.mass == undefined) ? "Unable to find" : information.mass, 
      hair_color: (information.hair_color == null || information.hair_color == undefined) ? "Unable to find" : information.hair_color,
      homeworld: (information.homeworld == null || information.homeworld == undefined) ? "Unable to find" : information.homeworld,
      starships: (information.starships == null || information.starships == undefined || information.starships.length == 0) ? ["Unable to find"] : information.starships
    }

    if (information.name == "") {
      return <p className="placeholder">No character yet</p>
    } else {
      return (
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><p className="information">{info.name}</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">{info.height}</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">{info.mass}</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">{info.hair_color}</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">{info.homeworld}</p></TableCell>
            </TableRow>
            {info.starships.map((starship) => {
              return (
                <TableRow>
                  <TableCell><p className="information">{starship}</p></TableCell>
                </TableRow>
              )
            })}
          </TableHead>
        </Table>
      )
    }
  }

  export default CreateRow