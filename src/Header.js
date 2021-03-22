import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';

const Header = () => {

    const headers = {
        name: 'Name',
        height: 'Height',
        mass: 'Mass',
        hair_color: 'Hair Color',
        homeworld: 'Homeworld',
        starships: [
            'Starships'
        ]
    }

    return (
        <>
        <div className="margin"></div>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell><p className="information">Name</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">Height</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">Mass</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">Hair color</p></TableCell>
            </TableRow>
            <TableRow>
              <TableCell><p className="information">Homeworld</p></TableCell>
            </TableRow>
            <TableRow>
                <TableCell><p className="information">Starships</p></TableCell>
            </TableRow>
          </TableHead>
        </Table>
        </>
        
    );
}

export default Header;
