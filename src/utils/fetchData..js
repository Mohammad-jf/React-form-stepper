import axios from "axios";

export const convertDataFormat = (data, optionKey) => {
  const parentInputGenerator = (item) => {
    return {
      ParentId: item.InputId,
      ValueId: optionKey,
      ParentLabel: item.InputLabel,
    };
  };

  return {
    ChildId: `${data.InputId}`,
    ChildLabel: `${data.InputLabel}`,
    Parents: data.ParentInputs.map((item) => parentInputGenerator(item)),
  };
};

export const fetchData = async (convertData) => {
  const response = await axios.post(
    "http://45.135.243.94:8082/api/SubmitOrder/Insurance/DependentValues",
    convertData
  );
  const data = response.data;

  return data;
};
