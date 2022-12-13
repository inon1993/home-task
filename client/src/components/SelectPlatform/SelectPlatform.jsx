import "./SelectPlatform.css";

const SelectPlatform = ({ action, changeValues, advertsringPlatform }) => {
  const platforms = Object.freeze({
    GOOGLE: "Google",
    TABOOLA: "Taboola",
    TIKTOK: "TikTok",
  });

  return (
    <select
      className={action === "add" ? "platform-select" : "platform-select-edit"}
      name="advertsringPlatform"
      onChange={changeValues}
      defaultValue={action === "add" ? "" : advertsringPlatform}
    >
      {action === "add" && (
        <option disabled default value="">
          Select a platform
        </option>
      )}
      <option value={platforms.GOOGLE}>{platforms.GOOGLE}</option>
      <option value={platforms.TABOOLA}>{platforms.TABOOLA}</option>
      <option value={platforms.TIKTOK}>{platforms.TIKTOK}</option>
    </select>
  );
};

export default SelectPlatform;
