//ESTE ARCHIVO SE EJECUTARA CADA VES QUE CORRAMOS LAS PRUEBAS (VER VIDEO 13 DE LA CARPETA 5)
// import '@testing-library/jest-dom/extend-expect';

//Carpeta 5 Video 14 - ENZYME para TESTING 
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {createSerializer} from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });
expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

