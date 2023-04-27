import { useStore } from "../../context/storeContext.js";

const Volk = () => {
  const { volk } = useStore();
  return (
    <div>
      <form>
        <select>
          <option>Volk auswählen</option>
          {volk.map((volk) => (
            <option>{volk.name}</option>
          ))}
        </select>
      </form>
    </div>
  );
};

export default Volk;
