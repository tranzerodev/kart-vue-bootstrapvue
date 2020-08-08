<template>
  <b-container fluid tag="div" class="px-0">
    <b-row class="mb-4">
      <b-col cols="12">
        <h4 class="font-weight-bold form-title">
          {{ $t('education-and-skills') }}
        </h4>
      </b-col>
    </b-row>
    <form
      @submit.prevent="submit"
      v-for="(education, index) in educations"
      :key="index"
    >
      <div class="border-top my-3" v-show="index"></div>
      <b-row class="mb-2">
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              v-model="education.name"
              :id="'name' + index"
              class="col-sm-12 mat-form-control"
              :name="'name' + index"
              :placeholder="$t('scholl-or-college-or-university')"
              :aria-describedby="'name' + index"
              v-validate="{ required: true }"
              :state="validateState('name' + index)"
              :data-vv-as="$t('name')"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['name']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">
              {{ veeErrors.first('name' + index) }}
            </b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object' ? errorMessage['name'] : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage === 'object'
                  ? errorMessage['name'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              v-model="education.degree"
              :id="'degree' + index"
              class="col-sm-12 mat-form-control"
              :name="'degree' + index"
              :placeholder="$t('degree')"
              aria-describedby="degree"
              v-validate="{ required: true }"
              :state="validateState('degree' + index)"
              :data-vv-as="$t('degree')"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['degree']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">
              {{ veeErrors.first('degree' + index) }}
            </b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object'
                  ? errorMessage['degree']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage === 'object'
                  ? errorMessage['degree'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
        <b-col cols="12">
          <b-form-group>
            <b-form-input
              v-model="education.major"
              :id="'major' + index"
              class="col-sm-12 mat-form-control"
              :name="'major' + index"
              :placeholder="$t('major')"
              :aria-describedby="'major' + index"
              v-validate="{ required: true }"
              :state="validateState('major' + index)"
              :data-vv-as="$t('major')"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['major']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">
              {{ veeErrors.first('major' + index) }}
            </b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object' ? errorMessage['major'] : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage === 'object'
                  ? errorMessage['major'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mb-3">
        <b-col cols="6">
          <b-form-group class="mb-1">
            <b-input-group class="mat-date-picker">
              <b-form-input
                id="example-input"
                v-model="education.start_dateAsOtherFormatter"
                type="text"
                class="mat-form-control"
                :name="'start_date' + index"
                :placeholder="`${$t('start-date')} (${$t('mm-dd-yyyy')})`"
                autocomplete="off"
                v-validate="'required: true |date_format:MM-dd-yyyy'"
                @change="changeStartDateOtherFormatter(index)"
                aria-describedby="start_date"
                :state="validateState('start_date' + index)"
                :data-vv-as="$t('start-date')"
                :class="{
                  'is-invalid':
                    typeof errorMessage[index] === 'object'
                      ? errorMessage[index]['start_date']
                      : false,
                }"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  :id="'start-date-datepicker' + index"
                  class="mat-form-control py-2 pl-2 date-picker-button"
                  :max="max"
                  menu-class="date-popup"
                  v-model="education.start_date"
                  button-only
                  button-variant="transparent"
                  dropright
                  @input="changeStartDate(index)"
                  offset="10"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }"
                ></b-form-datepicker>
              </b-input-group-append>
              <b-form-invalid-feedback id="input-1-live-feedback">{{
                veeErrors.first('start_date' + index)
              }}</b-form-invalid-feedback>
              <div
                v-if="
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['start_date']
                    : false
                "
                class="invalid-feedback"
              >
                {{
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['start_date'].toString()
                    : false
                }}
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
        <b-col cols="6">
          <b-form-group class="mb-1">
            <b-input-group class="mat-date-picker">
              <b-form-input
                id="example-input"
                v-model="education.graduation_dateAsOtherFormatter"
                type="text"
                class="mat-form-control"
                :name="'graduation_date' + index"
                :placeholder="`${$t('end-date')} (${$t('mm-dd-yyyy')})`"
                autocomplete="off"
                v-validate="'required: true |date_format:MM-dd-yyyy'"
                @change="changeToDateOtherFormatter(index)"
                aria-describedby="graduation_date"
                :state="validateState('graduation_date' + index)"
                :data-vv-as="$t('end-date')"
                :class="{
                  'is-invalid':
                    typeof errorMessage[index] === 'object'
                      ? errorMessage[index]['graduation_date']
                      : false,
                }"
              ></b-form-input>
              <b-input-group-append>
                <b-form-datepicker
                  :id="'start-date-datepicker' + index"
                  class="mat-form-control py-2 pl-2 date-picker-button"
                  :max="max"
                  menu-class="date-popup"
                  v-model="education.graduation_date"
                  button-only
                  button-variant="transparent"
                  @input="changeToDate(index)"
                  dropright
                  offset="10"
                  :date-format-options="{
                    year: 'numeric',
                    month: 'short',
                    day: '2-digit',
                  }"
                ></b-form-datepicker>
              </b-input-group-append>
              <b-form-invalid-feedback id="input-1-live-feedback">{{
                veeErrors.first('graduation_date' + index)
              }}</b-form-invalid-feedback>
              <div
                v-if="
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['graduation_date']
                    : false
                "
                class="invalid-feedback"
              >
                {{
                  typeof errorMessage[index] === 'object'
                    ? errorMessage[index]['graduation_date'].toString()
                    : false
                }}
              </div>
            </b-input-group>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="12">
          <b-form-group class="mb-0">
            <b-form-input
              v-model="education.location"
              id="location"
              class="col-sm-12 mat-form-control"
              name="location"
              :placeholder="$t('location')"
              aria-describedby="location"
              v-validate="{ required: true }"
              :state="validateState('location' + index)"
              :data-vv-as="$t('location')"
              :class="{
                'is-invalid':
                  typeof errorMessage === 'object'
                    ? errorMessage['location']
                    : false,
              }"
            />
            <b-form-invalid-feedback id="input-1-live-feedback">
              {{ veeErrors.first('location' + index) }}
            </b-form-invalid-feedback>
            <div
              v-if="
                typeof errorMessage === 'object'
                  ? errorMessage['location']
                  : false
              "
              class="invalid-feedback"
            >
              {{
                typeof errorMessage === 'object'
                  ? errorMessage['location'].toString()
                  : false
              }}
            </div>
          </b-form-group>
        </b-col>
      </b-row>
      <b-row class="mt-2" v-show="typeof errorMessage[index] === 'string'">
        <b-col>
          <span class="text-danger">{{ errorMessage[index] }}</span>
        </b-col>
      </b-row>
      <b-row class="mb-2 px-2 mt-2" align-h="end">
        <IconButton
          :title="$t('delete-education')"
          icon-class="fa fa-minus text-danger"
          :right-icon="true"
          @click-icon-button="removeEducation(index)"
        />
      </b-row>
    </form>
    <b-row class="d-flex align-items-center mt-3 mb-3">
      <b-col>
        <IconButton
          :title="$t('add-education')"
          icon-class="fa fa-plus"
          @click-icon-button="addEducation"
        />
      </b-col>
    </b-row>
    <b-row class="mb-2 px-3">
      <AddItemChip title="Skills" :items="skills" @add-chip="addSkills" />
      <ItemChip
        v-for="(skill, index) in skills"
        :key="index"
        :title="skill"
        @remove-item="removeSkill"
      />
    </b-row>
    <b-row>
      <b-col cols="8">
        <AddItemChipAuto
          :title="$t('languages')"
          :items="languages.map(language => language.lang)"
          :itemOptions="languageList.map(language => language.name)"
          @add-chip="addLanguages"
        />
      </b-col>

      <b-col cols="4">
        <b-form-group class="pl-0 mb-1">
          <b-form-select
            class="mat-form-control"
            v-model="languageLevel"
            :options="languageLevelOptions"
            :placeholder="$t('level')"
            name="languageLevel"
            aria-describedby="gender-live-feedback"
          ></b-form-select>
          <div v-if="isEmptyLevel" class="text-danger">
            {{ $t('please-select-language-level') }}
          </div>
        </b-form-group>
      </b-col>
    </b-row>
    <b-row>
      <b-col cols="12 d-flex flex-wrap">
        <ItemChip
          v-for="(language, index) in languages"
          :key="index"
          :title="language.lang"
          :level="language.level"
          :haveBookmark="true"
          @remove-item="removeLanguage"
        />
      </b-col>
    </b-row>
    <b-row>
      <b-col class="d-flex justify-content-between">
        <b-button
          variant="outline-grey"
          class="px-4 py-2 mt-2 mb-3 border-2"
          @click="goToBefore()"
        >
          <i class="fa fa-arrow-left mr-3"></i>{{ $t('back') }}
        </b-button>
        <b-button
          variant="primary"
          class="px-4 py-2 mt-2 mb-3 border-2 ml-auto"
          @click="completeProfile()"
          >{{ $t('create') }}</b-button
        >
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex'
import moment from 'moment'
import DialogMixin from '../../../../shared/mixins/ModalHandler'
import IconButton from '@/shared/components/IconButton/IconButton'
import AddItemChip from '@/shared/components/AddItemChip/AddItemChip'
import AddItemChipAuto from '@/shared/components/AddItemChip/AddItemChipAuto'
import ItemChip from '@/shared/components/AddItemChip/ItemChip'
export default {
  name: 'AddProfileEducation',
  mixins: [DialogMixin],
  components: {
    IconButton,
    AddItemChip,
    AddItemChipAuto,
    ItemChip,
  },
  props: {
    currentStep: {
      type: Number,
      default: 1,
    },
  },
  data() {
    const now = new Date()
    const today = new Date(now.getFullYear(), now.getMonth(), now.getDate())
    const maxDate = new Date(today)
    return {
      max: maxDate,
      educations: [],
      initialEducation: {
        name: '',
        degree: '',
        major: null,
        start_date: '',
        graduation_date: '',
        location: '',
      },
      skills: [],
      languages: [],
      languageLevel: null,
      initialLanguageLevelOption: [
        {
          value: null,
          text: 'Level',
        },
      ],
      languageLevelOptions: [],
      isEmptyLevel: false,
      languageList: [],
    }
  },

  created() {},
  computed: {
    ...mapState({
      userId: state => state.register.userId,
      isStudent: state => state.register.isStudent,
      errorMessage: state => state.register.addEducationHistoryError,
    }),
  },
  watch: {
    confirmResult: function(newVal) {
      if (newVal) {
        this.$router
          .push('/dashboard')
          .then(failure => {
            if (failure) {
              failure instanceof Error
              failure.type
            }
          })
          .catch(() => {})
      }
    },
    languageLevel: function(newVal) {
      if (newVal) {
        this.isEmptyLevel = false
      }
    },
  },
  methods: {
    validateState(ref) {
      if (
        this.veeFields[ref] &&
        (this.veeFields[ref].dirty || this.veeFields[ref].validated)
      ) {
        return !this.veeErrors.has(ref)
      }
      return null
    },

    addEducation() {
      this.educations.push({
        name: '',
        degree: '',
        major: null,
        start_date: '',
        start_dateAsOtherFormatter: '',
        graduation_date: '',
        graduation_dateAsOtherFormatter: '',
        location: '',
      })
    },
    goToBefore() {
      if (this.isStudent) {
        this.$emit('go-to-previous-step', this.currentStep - 1)
      } else {
        this.$emit('go-to-previous-step', this.currentStep)
      }
    },
    async completeProfile() {
      this.$validator.validateAll().then(async result => {
        if (!result) {
          return
        }
        /* eslint-disable no-unused-vars */
        let educations = this.educations.map(education => {
          return {
            account: this.userId,
            name: education.name,
            major: education.major,
            degree: education.degree,
            graduation_date: moment(education.graduation_date).format(
              'YYYY-MM-DD'
            ),
            start_date: moment(education.start_date).format('YYYY-MM-DD'),
            location: education.location,
          }
        })

        let isSuccess = false
        //add skills
        if (this.skills && this.skills.length) {
          const result = await this.$store.dispatch(
            'register/updateJobSeekerProfile',
            { skills: this.skills, account: this.userId }
          )
          if (result) {
            isSuccess = true
          } else {
            isSuccess = false
          }
        }
        //add languages
        if (this.languages && this.languages.length) {
          const convertedLanguages = this.languages.map(language => {
            return {
              account: this.userId,
              lang: language.code,
              level: language.level,
            }
          })

          await Promise.all(
            convertedLanguages.map(async (language, index) => {
              const result = await this.$store.dispatch(
                'register/addLanguages',
                { ...language, index }
              )
              if (result) {
                isSuccess = true
              } else {
                isSuccess = false
              }
            })
          )
        }

        await Promise.all(
          educations.map(async (education, index) => {
            const result = await this.$store.dispatch(
              'register/addEducationHistory',
              { ...education, index }
            )
            if (result) {
              isSuccess = true
            } else {
              isSuccess = false
            }
          })
        )

        if (
          isSuccess ||
          (this.educations.length === 0 &&
            this.languages.length === 0 &&
            this.skills.length === 0)
        ) {
          await this.showConfirmModal(
            this.$t('congs-profile-creation'),
            this.$t('go-to-my-profile')
          )

          if (this.confirmResult) {
            this.$router
              .push('/dashboard')
              .then(failure => {
                if (failure) {
                  failure instanceof Error
                  failure.type
                }
              })
              .catch(() => {})
          }
        }
      })
    },
    addSkills(skill) {
      this.skills = this.skills.concat(skill)
    },
    addLanguages(language) {
      let currentLanguage = this.languageList.find(
        lang => lang.name === language
      )
      if (this.languageLevel && currentLanguage) {
        this.languages = this.languages.concat({
          lang: currentLanguage.name,
          code: currentLanguage.code,
          level: this.languageLevel,
        })
      } else {
        this.isEmptyLevel = true
      }
    },
    initEducation() {
      this.educations.push(this.initialEducation)
    },
    removeSkill(removedItem) {
      if (removedItem) {
        let index = this.skills.findIndex(item => item === removedItem)
        if (index > -1) {
          this.skills.splice(index, 1)
        }
      }
    },
    removeLanguage(removedItem) {
      if (removedItem) {
        let index = this.languages.findIndex(item => item.lang === removedItem)
        if (index > -1) {
          this.languages.splice(index, 1)
        }
      }
    },
    async loadSkillList() {
      const skillList = await this.$store.dispatch('catalog/loadSkill')
      if (skillList && skillList.length) {
        this.languageLevelOptions = this.initialLanguageLevelOption.concat(
          skillList.map(category => ({
            value: category.code,
            text: category.name,
          }))
        )
      } else {
        this.languageLevelOptions = this.initialLanguageLevelOption
      }
    },
    async loadLanguageList() {
      let languages = await this.$store.dispatch('catalog/loadLanguage')
      if (languages && languages.length) {
        this.languageList = languages
      }
    },
    changeStartDate(index) {
      if (
        this.educations[index].start_dateAsOtherFormatter !==
        moment(this.educations[index].start_date).format('MM-DD-YYYY')
      ) {
        this.educations[index].start_dateAsOtherFormatter = moment(
          this.educations[index].start_date
        ).format('MM-DD-YYYY')
      }
    },
    changeStartDateOtherFormatter(index) {
      if (
        this.educations[index].start_date !==
        moment(this.educations[index].start_dateAsOtherFormatter).format(
          'YYYY-MM-DD'
        )
      ) {
        this.educations[index].start_date = moment(
          this.educations[index].start_dateAsOtherFormatter
        ).format('YYYY-MM-DD')
      }
    },
    changeToDate(index) {
      if (
        this.educations[index].graduation_dateAsOtherFormatter !==
        moment(this.educations[index].graduation_date).format('MM-DD-YYYY')
      ) {
        this.educations[index].graduation_dateAsOtherFormatter = moment(
          this.educations[index].graduation_date
        ).format('MM-DD-YYYY')
      }
    },
    changeToDateOtherFormatter(index) {
      if (
        this.educations[index].graduation_date !==
        moment(this.educations[index].graduation_dateAsOtherFormatter).format(
          'YYYY-MM-DD'
        )
      ) {
        this.educations[index].graduation_date = moment(
          this.educations[index].graduation_dateAsOtherFormatter
        ).format('YYYY-MM-DD')
      }
    },
    removeEducation(key) {
      let educationList = this.educations
      this.educations = _.filter(
        educationList,
        (education, index) => index !== key
      )
    },
  },

  mounted() {
    this.initEducation()
    this.loadSkillList()
    this.loadLanguageList()
  },
}
</script>

<style lang="scss" scoped></style>
