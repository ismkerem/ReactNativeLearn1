import {createSlice} from '@reduxjs/toolkit';

type Point = {
  x: number;
  y: number;
};
type Path = {
  id: string;
  points: Point[];
  color: string;
  size: number;
};

type Draw = {
  paths: Path[];
  penColor: string;
  penSize: number;
  tool: 'pen' | 'eraser';
};

const initialValue: Draw = {
  penSize: 3,
  penColor: '#000000',
  tool: 'pen',
  paths: [],
};

const drawingSlice = createSlice({
  name: 'drawingSlice',
  initialState: initialValue,
  reducers: {
    addPoint: (state, action) => {
      if (
        state.paths.length === 0 ||
        state.paths[state.paths.length - 1].id !== action.payload.id
      ) {
        state.paths.push({
          id: action.payload.id,
          points: [],
          color: state.penColor,
          size: state.penSize,
        });
      }
      state.paths[state.paths.length - 1].points.push(action.payload.point);
    },
    setColor: (state, action) => {
      state.penColor = action.payload;
    },
    setSize: (state, action) => {
      state.penSize = action.payload;
    },
    setTool: (state, action) => {
      state.tool = action.payload;
    },
    clearCanvas: state => {
      state.paths = [];
    },
  },
});

export const {addPoint, setColor, setSize, setTool, clearCanvas} =
  drawingSlice.actions;
export default drawingSlice.reducer;
