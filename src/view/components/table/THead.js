var tableHead = {
  view: () => {
    return m("thead", m("tr.stripe-dark", [
      m("th.fw6.tl.pa3.bg-white", "Locn_Nbr"),
      m("th.fw6.tl.pa3.bg-white", "Online_Ord_Id"),
      m("th.fw6.tl.pa3.bg-white", "KSN_Id"),
      m("th.fw6.tl.pa3.bg-white", "SKU_Prc_Type_Cd")
    ]))
  }
}

export default tableHead;