export default function SubActions({ subActions, send }) {
  return (
    <div className="actionsContainer actionAnimation afterShortDelay2">
      {subActions.map((subAction, index) => {
        return (
          <div
            className="action"
            key={index}
            onClick={() => {
              send({
                type: "SUB_ACTION_SELECTED",
                value: subAction,
              });
            }}
          >
            {subAction.action}
          </div>
        );
      })}
    </div>
  );
}
