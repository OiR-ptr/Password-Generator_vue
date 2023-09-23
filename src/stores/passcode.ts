import { defineStore } from "pinia";
import { reactive, ref, toRefs } from "vue";

export interface Passcode {
  domain: string;
  emoji: string;
}

export const usePasscodeStore = defineStore(
  "passcode",
  () => {
    const state = reactive({
      passcodes: [] as Passcode[],
      testCode: "",
    });

    const registerPasscode = (passcode: Passcode) => {
      state.passcodes.push(passcode);
    };

    return {
      ...toRefs(state),
      registerPasscode,
    };
  },
  {
    persist: true,
  }
);
