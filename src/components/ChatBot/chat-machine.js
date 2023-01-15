import { createMachine, assign } from "xstate";

const actions = [
  {
    action: "Getting in touch with Yael 📬",
    subActions: [
      {
        action: "Linkedin account",
        response: (
          <a
            href="https://www.linkedin.com/in/yael-lotan-030266132/"
            target="_blank"
            rel="noreferrer"
          >
            Click here
          </a>
        ),
      },
      { action: "CV", response: "click to download" },
      { action: "Email", response: "yaelotan19@gmail.com" },
      { action: "Phone number", response: "054-6323450" },
    ],
  },
  {
    action: "Beach volleyball tips 🏐",
    subActions: [
      {
        action: "Attacking",
        response: "Wait to see the set before starting your approach 🤌🏽",
      },
      {
        action: "Defense",
        response:
          "Don't forget to have your hands ready to go up and protect your money maker 👨‍🦲",
      },
      {
        action: "Serving",
        response:
          "After you hit the ball try to move you hand back as fast as possible as if the ball burning 🔥",
      },
      {
        action: "Setting",
        response:
          "Turn your body entirely towards the target you aim to set 🔦",
      },
      {
        action: "Reception",
        response:
          "Set your platform as early as possible without swinging you hands to the ball 🌈",
      },
    ],
  },
  {
    action: "Find an holiday destination 🛫",
    subActions: [
      {
        action: "Urban",
        response: [
          "London! 🎡",
          "Madrid! 🦬",
          "Paris! 🥐",
          "Rome! 🍝",
          "San Francisco! 🌉",
          "Berlin! 🪩",
          "Boston! 🐿",
        ],
      },
      {
        action: "Relax",
        response: [
          "Thailand! 🏖",
          "Zanzibar! 🏝",
          "Mauritius! ⛱",
          "Seychelles! 🍹",
        ],
      },
      {
        action: "Explore",
        response: [
          "Vietnam! 🗿",
          "New york! 🗽",
          "New Zealand! 🏕",
          "Marocco! 🕌",
          "Japan! 👘",
          "China! 🐲",
        ],
      },
      {
        action: "Eat",
        response: [
          "Italy! 🍕",
          "Japan! 🍱",
          "Spain! 🥘",
          "Swiss! 🧀",
          "Germany! 🌭",
          "Mexico! 🌮",
          "Greece! 🍤",
        ],
      },
    ],
  },
  {
    action: "Decide on lunch 🍽",
    subActions: [
      {
        action: "Asian",
        response: [
          "Dim sum 🥟",
          "Sushi 🍣",
          "Curry 🍛",
          "Nodels 🥡",
          "Ramen 🍜",
          "",
        ],
      },
      {
        action: "Surprise me",
        response: [
          "Burrito 🌯",
          "Sandwich 🥪",
          "Ramen 🍜",
          "Dim sum 🥟",
          "Sushi 🍣",
          "Falafel 🧆",
          "Taco 🌮",
          "Spaghetti 🍝",
        ],
      },
      {
        action: "Karnivor vibe",
        response: ["Burger 🍔", "Rotisserie 🍗", "Steak 🥩"],
      },
      {
        action: "Veggy",
        response: [
          "Falafel 🧆",
          "Salad 🥗",
          "Veggy ramen 🍜",
          "Pizza 🍕",
          "Veggy bagel 🥯",
          "Veggy sushi 🍣",
        ],
      },
    ],
  },
];

export default createMachine(
  {
    id: "chat-machine",
    initial: "waitForMainAction",
    predictableActionArguments: true,
    context: {
      actions,
      conversations: [{}],
    },
    states: {
      waitForMainAction: {
        on: {
          ACTION_SELECTED: {
            actions: "addBotResponseForAction",
            target: "waitForSubAction",
          },
        },
      },
      waitForSubAction: {
        on: {
          SUB_ACTION_SELECTED: {
            actions: ["addBotResponseForSubAction", "pushNewConversation"],
            target: "waitForMainAction",
          },
        },
      },
    },
  },
  {
    actions: {
      addBotResponseForAction: assign((context, event) => {
        const updatedConversations = [...context.conversations];
        const updatedLastConversation = {
          ...updatedConversations[updatedConversations.length - 1],
        };

        updatedLastConversation.action = event.value;
        updatedConversations[updatedConversations.length - 1] =
          updatedLastConversation;

        return {
          conversations: updatedConversations,
        };
      }),
      addBotResponseForSubAction: assign((context, event) => {
        const updatedConversations = [...context.conversations];
        const updatedLastConversation = {
          ...updatedConversations[updatedConversations.length - 1],
        };

        const subAction = { ...event.value };
        if (Array.isArray(event.value.response)) {
          const randomIndex = Math.floor(
            Math.random() * event.value.response.length
          );
          subAction.response = event.value.response[randomIndex];
        }

        updatedLastConversation.subAction = subAction;
        updatedConversations[updatedConversations.length - 1] =
          updatedLastConversation;

        return {
          conversations: updatedConversations,
        };
      }),
      pushNewConversation: assign((context) => {
        const updatedConversations = [...context.conversations];
        updatedConversations.push({});

        return {
          conversations: updatedConversations,
        };
      }),
    },
  }
);
