members = [
  {
    fname: 'John',
    lname: 'Lennon',
    instrument: 'Violão'
  },
  {
    fname: 'George',
    lname: 'Harrison',
    instrument: 'Guitarra'
  }
]

const handlingForms = {

  data() {
    return {
      members: window.members,
      newMember: {}
    }
  },
  methods: {
    addMember: function () {
      const areFieldsFilledIn = this.newMember.fname
        && this.newMember.lname
        && this.newMember.instrument;

      if (!areFieldsFilledIn) {
        alert("All fields must be filled!")
        return;
      }

      this.members.push(this.newMember);
      this.newMember = {};
    }
  }
};

Vue.createApp(handlingForms).mount('#app');
