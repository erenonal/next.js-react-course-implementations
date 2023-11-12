import { useRouter } from "next/router";

function ClientProjectPage(params) {
  const router = useRouter();
  const { id } = router.query;
  function loadProjectHandler() {
    // first method that we can use
    // router.push("/clients/eren/projecta");

    // second method that we can use too
    router.push({
      pathname: "/clients/[id]/[clientprojectid]",
      query: { id: [id], clientprojectid: `proje1` },
    });
  }
  return (
    <div>
      <h1>The Project of given Client</h1>
      <button onClick={loadProjectHandler}> Load Project </button>
    </div>
  );
}

export default ClientProjectPage;
