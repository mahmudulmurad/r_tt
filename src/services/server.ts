//Enum to list for Select component dropdown options
export const enumToList = (entity: Record<string, any>) => {
  if (!entity) {
    entity = {};
  }

  return Object.keys(entity).map((item) => {
    let title = "";
    title = entity[item];
    return {
      id: item,
      title: title,
    };
  });
};
