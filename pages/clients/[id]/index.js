import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
  function loadProjectHandler() {
    // first method that we can use 
    // router.push("/clients/eren/projecta");


    // second method that we can use too
    router.push({
      parhname: "clients/eren/[projectid]",
      query: { id: "eren", clientprojectid: "projecta" },
    });
  }
  return (
    <div>
      <h1>The Project of given Client</h1>
      <button onClick={loadProjectHandler}> Load Project A </button>
    </div>
  );
}

export default ClientProjectPage;
