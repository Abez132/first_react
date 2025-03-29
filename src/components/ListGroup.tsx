function ListGroup() {
  const members=["Mecha Temesgen Merga","Nasifay Chala Rorisa","Dimtse Begidu","YESEHAK KEBERE TADESSE","Mekuanint Ejigu","Eyerusalem Gashaw Misganaw","Meheretabe Abayneh","Abenezer Daniel","Aschalew girma"];
  return (
    <div>
      <h1>Group Members</h1>
      {members.map((members => (
      <ul >
        <li className="list-items">{members}</li>
      </ul>
  )))}
    </div>
  );
}

export default ListGroup;
