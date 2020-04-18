var tableBody = {
  view: (vnode) => {
    return m("tbody", vnode.attrs.list.map(function (record) {
      return m("tr.stripe-dark", [
        m("td.pa3", record.Locn_Nbr),
        m("td.pa3", record.Online_Ord_Id),
        m("td.pa3", record.KSN_Id),
        m("td.pa3", record.SKU_Prc_Type_Cd)
      ])
    }))
  }
}

export default tableBody;