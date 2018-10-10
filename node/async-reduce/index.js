async function getProjects() {
  return [
    { id: 1, name: "A" },
    { id: 2, name: "B" },
    { id: 3, name: "C" },
    { id: 4, name: "D" }
  ];
}

async function getUsersFromProject(projectId) {
  switch (projectId) {
    case 1:
      return [{ id: 10, name: "X" }];
    case 2:
      return [{ id: 11, name: "Y" }];
    case 3:
      return [{ id: 12, name: "Z" }];
    case 4:
      return [];
    default:
      return [];
  }
}

async function main() {
  const projects = await getProjects();
  const result = await reduceAsync(
    projects,
    async (arr, project) => {
      project.users = await getUsersFromProject(project.id);
      arr.push(project);
      return arr;
    },
    []
  );

  console.log(JSON.stringify(result, null, 2));
}

async function reduceAsync(arr, callbackPromise, initialValue) {
  return await arr.reduce(async (accumulatorPromise, current, index) => {
    const accumulator = await accumulatorPromise;
    return await callbackPromise(accumulator, current, index);
  }, Promise.resolve(initialValue));
}

main().catch(console.error);
