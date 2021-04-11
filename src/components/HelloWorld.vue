<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/HI_seal.png')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3">
          Welcome to the Hawaii LFO Calculator
        </h1>
      </v-col>
      <v-col cols="12">
          <v-autocomplete
              v-model="charges"
              :disabled="isUpdating"
              :items="regulations"
              filled
              chips
              color="blue-grey lighten-2"
              label="Select one or more charges to evaluate"
              item-text="name"
              item-value="name"
              multiple
            >
              <template v-slot:selection="data">
                <v-chip
                  v-bind="data.attrs"
                  :input-value="data.selected"
                  close
                  @click="data.select"
                  @click:close="remove(data.item)"
                >
                  {{ data.item.name }}
                </v-chip>
              </template>
              <template v-slot:item="data">
                <template v-if="typeof data.item !== 'object'">
                  <v-list-item-content v-text="data.item"></v-list-item-content>
                </template>
                <template v-else>
                  <v-list-item-content>
                    <v-list-item-title v-html="data.item.name"></v-list-item-title>
                    <v-list-item-subtitle v-html="data.item.section"></v-list-item-subtitle>
                  </v-list-item-content>
                </template>
              </template>
            </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        autoUpdate: true,
        charges: [],
        isUpdating: false,
        regulations: [
          { name: 'Methamphetamine Trafficking', url: 'https://sammade.github.io/aloha-io/title-37/chapter-712/section-712-1240_7/', section: '712-1240.7' },
          { name: 'Burglary in the first degree', url: 'https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-810/', section: '708-810' },
          { name: 'Graffiti; sentencing', url: 'https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-823_6/', section: '708-823.6' },
          { name: 'Shoplifting', url: 'https://sammade.github.io/aloha-io/title-37/chapter-708/section-708-833_5/', section: '708-833.5' },
          { name: 'Sexual assault in the first degree', url: 'https://sammade.github.io/aloha-io/title-37/chapter-707/section-707-730/', section: '707-730' },
          { name: 'Drive on right side of roadway; exceptions', url: 'https://sammade.github.io/aloha-io/title-17/chapter-291c/section-291c-41/', section: '291C-41' },
          { name: 'Habitually operating a vehicle under the influence of an intoxicant', url: 'https://sammade.github.io/aloha-io/title-17/chapter-291e/section-291e-61_5/', section: '291E-61.5' },
          { name: 'Operating a vehicle after license and privilege have been suspended or revoked for operating a vehicle under the influence of an intoxicant; penalties', url: 'https://sammade.github.io/aloha-io/title-17/chapter-291e/section-291e-62/', section: '291E-62' },
        ],
      }
    },

    watch: {
      isUpdating (val) {
        if (val) {
          setTimeout(() => (this.isUpdating = false), 3000)
        }
      },
    },

    methods: {
      remove (item) {
        const index = this.charges.indexOf(item.name)
        if (index >= 0) this.charges.splice(index, 1)
      },
    },
  }
</script>
