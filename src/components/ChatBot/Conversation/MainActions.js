export default function MainActions({ actions, send }) {
  return (
    <div className="actionsContainer actionAnimation threeSecDelay">
      {actions.map((action) => {
        return (
          <div
            className="action"
            key={action.action}
            onClick={() => {
              send({ type: "ACTION_SELECTED", value: action });
            }}
          >
            {action.action}
          </div>
        );
      })}
    </div>
  );
}
