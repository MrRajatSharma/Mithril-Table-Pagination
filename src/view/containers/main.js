import THead from '../components/table/THead';
import TBody from '../components/table/TBody';

const createList = (length) => {
  let x = 1;
  return Array.from({ length }, () => {
  return { Locn_Nbr: x++, Online_Ord_Id: 0, KSN_Id: 0, SKU_Prc_Type_Cd: 0 }
})};

const state = {
  rowsOutOf: 100,
  startingAtRow: 1,
  showing: 10,
  list: [],
  forwardByOnePage: () => {  
    if (state.startingAtRow + state.showing > state.rowsOutOf) return
    state.startingAtRow = state.startingAtRow + state.showing;
  },
  forwardByOneRow: () => {
    if (state.startingAtRow >= state.rowsOutOf) return
    state.startingAtRow = state.startingAtRow + 1;
  },
  forwardToEnd: () => {
    state.startingAtRow = state.rowsOutOf;
  },
  backwardByOnePage: () => {
    if (state.startingAtRow - state.showing < 0) return
    state.startingAtRow = state.startingAtRow - state.showing;
  },
  backwardByOneRow: () => {
    if (state.startingAtRow - 1 <= 0) return
    state.startingAtRow = state.startingAtRow - 1;
  },
  backwardToStart: () => {
    state.startingAtRow = 1;
  },
  handleShowingChange: e => {
    const value = e.target.value;
    // max allowed value is 1000
    if (value < 0 || value > state.list.length || value > 1000) return;
    state.showing = e.target.value;
  },
  handleRowsOutOfChange: e => {
    const value = e.target.value;
    if (value < 0) return;
    state.rowsOutOf = e.target.value;
    state.list = createList(state.rowsOutOf);

  },
  handleStartingAtRowChange: e => {
    const value = e.target.value;
    if (value < 0 || value > state.list.length) return;
    state.startingAtRow = e.target.value;
  }
};

export default function () {
    return {
      oninit: () => {
        state.list = createList(state.rowsOutOf);
      },
      view: () =>
        m("main.pa4", [
          m("div.flex.items-center.justify-center.pa4.bg-lightest-blue.navy.center.mw8", [
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box", {onclick: state.backwardToStart}, "|<"),
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box", {onclick: state.backwardByOnePage}, "<"),
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box.mr4", {onclick: state.backwardByOneRow}, "<<"),
            m("span", "Showing"),
            m("input.b.pa2.input-reset.ba.bg-transparent.ma2", {
              style: { maxWidth: '30px'},
              type: "showing",
              name: "showing",
              value: state.showing,
              oninput: state.handleShowingChange,
              id: "showing"
            }),
  
            m("span", "rows out of"),
            m("input.b.pa2.input-reset.ba.bg-transparent.ma2", {
              style: { maxWidth: '30px'},
              type: "rowsOutOf",
              name: "rowsOutOf",
              oninput: state.handleRowsOutOfChange,
              id: "rowsOutOf",
              value: state.rowsOutOf
            }),
  
            m("span", "starting at row"),
            m("input.b.pa2.input-reset.ba.bg-transparent.ma2", {
              style: { maxWidth: '30px'},
              type: "startingAtRow",
              name: "startingAtRow",
              oninput: state.handleStartingAtRowChange,
              value: state.startingAtRow,
              id: "startingAtRow"
            }),
  
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box.ml4", {onclick: state.forwardByOneRow}, ">>"),
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box", {onclick: state.forwardByOnePage}, ">"),
            m("button.f5.no-underline.black.bg-animate.hover-bg-black.hover-white.inline-flex.items-center.pa2.ba.border-box", {onclick: state.forwardToEnd}, ">|"),
            
          ]
          ),
  
          m("table.f6.w-100.mw8.center", [
            m(THead),
            m(TBody, { list: state.list.slice(state.startingAtRow - 1, ((state.startingAtRow - 1) + state.showing)) }),
          ])
        ])
    }
}