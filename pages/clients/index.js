import Link from "next/link";

function ClientsPage() {
  const clients = [
    { id: "eren", name: "eren" },
    { id: "demo", name: "demo" },
  ];
  // first part is here active part is developed
  // return (
  //   <div>
  //     <h1>The Clients Page</h1>
  //     <ul>
  //       <li>
  //         <Link href="clients/eren"> Eren Page</Link>
  //       </li>
  //       <li>
  //         <Link href="clients/demo"> Demo Page</Link>
  //       </li>
  //     </ul>
  //   </div>
  // );

  // this is the second developed part
  // return (
  //   <div>
  //     <h1>The Clients Page</h1>
  //     <ul>
  //       {clients.map((client) => (
  //         <li key={client.id}>
  //           <Link href={`/clients/${client.id}`}>
  //             {client.name}
  //           </Link>
  //         </li>
  //       ))}
  //     </ul>
  //   </div>
  // );

  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link href={{ pathname: "clients/[id]", query: { id: client.id } }}>
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
