<template>
  <div
    class="candidates-body"
    v-if="candidateProfile && candidateProfile !== null"
  >
    <div class="candidates-contact">
      <div class="panel-info">
        <div class="panel-info-title">
          <h6 class="info-title">Contact Information</h6>
          <a href="#" class="info-title" v-if="!isEditingContactInformation">
            <i class="fa fa-pencil" @click="editContactInformation()"></i>
          </a>
          <a href="#" class="info-title" v-if="isEditingContactInformation">
            <i class="fa fa-save" @click="saveContactInformation()"></i>
          </a>
        </div>
        <div class="panel-info-body">
          <ul class="contact-list-information">
            <li class>
              <span v-show="!isEditingContactInformation">
                {{ candidateProfile.email }}
              </span>
              <div class="form-group" v-show="isEditingContactInformation">
                <label for="contactEmail">Email</label>
                <input
                  id="contactEmail"
                  class="form-control form-control-sm"
                  type="text"
                  v-model="candidateProfile.email"
                />
              </div>
            </li>
            <li class>
              <span v-show="!isEditingContactInformation">
                {{ candidateProfile.location }}
              </span>
              <div class="form-group" v-show="isEditingContactInformation">
                <label for="contactAddress">Address</label>
                <input
                  id="contactAddress"
                  class="form-control form-control-sm"
                  type="text"
                  v-model="candidateProfile.location"
                />
              </div>
            </li>
            <li class>
              <span v-if="!isEditingContactInformation">
                {{ candidateProfile.phone }}
              </span>
              <div class="form-group" v-show="isEditingContactInformation">
                <label for="contactPhone">Phone</label>
                <input
                  id="contactPhone"
                  class="form-control form-control-sm"
                  type="text"
                  v-model="candidateProfile.phone"
                />
              </div>
            </li>
            <li class>
              <span v-show="!isEditingContactInformation">
                <a href="#">{{ candidateProfile.personal_website }}</a>
              </span>
              <div class="form-group" v-show="isEditingContactInformation">
                <label for="contactWebsite">Website</label>
                <input
                  id="contactWebsite"
                  class="form-control form-control-sm"
                  type="text"
                  v-model="candidateProfile.personal_website"
                />
              </div>
            </li>
            <li class>
              <form action></form>
              <span v-show="!isEditingContactInformation">
                Resume:
                <a :href="candidateProfile.resume">
                  <i
                    class="fa fa-2x fa-file-pdf-o"
                    aria-hidden="true"
                    v-if="
                      candidateProfile.resume &&
                        candidateProfile.resume.indexOf('.pdf') > 0
                    "
                  ></i>
                  <i
                    class="fa fa-2x fa-file-word-o"
                    aria-hidden="true"
                    v-if="
                      candidateProfile.resume &&
                        candidateProfile.resume.indexOf('.doc') > 0
                    "
                  ></i>
                </a>
              </span>
              <div class="form-group" v-show="isEditingContactInformation">
                <label for="contactResume" class="primary">
                  Resume:
                  <i class="fa fa-paperclip fa-2x"></i>
                </label>
                <input
                  id="contactResume"
                  class="form-control form-control-sm"
                  type="file"
                  name="resume"
                  @change="addFile($event.target)"
                />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="candidates-content">
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>About Me</h6>
        </div>
        <div class="panel-info-body">
          <p v-show="!isEditingAboutMe">
            {{ candidateProfile.profile_summary }}
          </p>
          <textarea
            class="form-control"
            name="about"
            v-show="isEditingAboutMe"
            rows="5"
            v-model="candidateProfile.profile_summary"
          ></textarea>
          <div class="info-actions">
            <button
              type="button"
              class="btn btn-link"
              v-if="!isEditingAboutMe"
              @click="editAboutMe()"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>Edit
            </button>
            <button
              type="button"
              class="btn btn-primary"
              v-if="isEditingAboutMe"
              @click="saveAboutMe()"
            >
              <i class="fa fa-save" aria-hidden="true"></i>Save
            </button>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>Work Experience</h6>
          <button
            class="btn btn-blank info-title"
            v-if="!isAddingWorkExperience"
            @click="addWorkExperience()"
          >
            <i class="fa fa-plus"></i>Add
          </button>
          <button
            class="btn btn-primary info-title"
            v-if="isAddingWorkExperience"
            @click="saveWorkExperience()"
          >
            <i class="fa fa-save"></i>Save
          </button>
        </div>
        <div class="panel-info-body">
          <div class="panel-experience-full-body">
            <div
              class="experience-item"
              v-for="experience in candidateProfile.experiences"
              :key="experience.id"
            >
              <div class="experience-image">
                <!-- <img :src="img" alt="company" /> -->
              </div>
              <div class="experience-detail">
                <div class="experience-detail-title">
                  <h6 v-show="!isEditingWorkExperience">
                    {{ experience.job_title }}
                  </h6>
                  <button
                    type="button"
                    class="btn btn-link"
                    v-if="!isEditingWorkExperience"
                    @click="editWorkExperience(experience)"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                  </button>
                </div>
                <div class="place-container">
                  <span v-show="!isEditingWorkExperience">
                    {{ experience.org_location }}
                  </span>
                  <span v-show="!isEditingWorkExperience">
                    {{ experience.from_date }}
                    {{ experience.to_date ? ` - ${experience.to_date}` : '' }}
                  </span>
                </div>
                <p v-show="!isEditingWorkExperience">
                  {{ experience.job_description }}
                </p>
                <div v-show="isEditingWorkExperience">
                  <div class="form-group">
                    <label for="editWorkOrganization">Organization:</label>
                    <input
                      id="editWorkOrganization"
                      class="form-control"
                      type="text"
                      v-model="experience.org_name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkPosition">Position:</label>
                    <input
                      id="editWorkPosition"
                      class="form-control"
                      type="text"
                      v-model="experience.job_title"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editOrg_location">Address:</label>
                    <input
                      id="editOrg_location"
                      class="form-control"
                      type="text"
                      v-model="experience.org_location"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkDescription">Description:</label>
                    <textarea
                      id="editWorkDescription"
                      class="form-control"
                      name="about"
                      rows="5"
                      v-model="experience.job_description"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="editWorkFrom">From Date:</label>
                    <input
                      id="editWorkFrom"
                      class="form-control"
                      type="date"
                      v-model="experience.from_date"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkTo">To Date:</label>
                    <input
                      id="editWorkTo"
                      class="form-control"
                      type="date"
                      v-model="experience.to_date"
                    />
                  </div>
                  <div class="form-check">
                    <input
                      type="checkbox"
                      class="form-check-input"
                      id="isCurrent"
                      v-model="experience.is_current"
                    />
                    <label class="form-check-label" for="isCurrent"
                      >Is Current.</label
                    >
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="closeEdit()"
                    >
                      <i class="fa fa-close" aria-hidden="true"></i>Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="saveWorkExperience(experience)"
                    >
                      <i class="fa fa-save" aria-hidden="true"></i>Save
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="experience-item" v-show="isAddingWorkExperience">
              <div class="experience-image">
                <!-- <img :src="newWork.image" alt="company" /> -->
              </div>
              <div class="experience-detail">
                <div class="form-group">
                  <label for="editWorkOrganization">Organization:</label>
                  <input
                    id="editWorkOrganization"
                    class="form-control"
                    type="text"
                    v-model="newWork.org_name"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkPosition">Position:</label>
                  <input
                    id="editWorkPosition"
                    class="form-control"
                    type="text"
                    v-model="newWork.job_title"
                  />
                </div>
                <div class="form-group">
                  <label for="editnewOrg_location">Address:</label>
                  <input
                    id="editnewOrg_location"
                    class="form-control"
                    type="text"
                    v-model="newWork.org_location"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkDescription">Description:</label>
                  <textarea
                    id="editWorkDescription"
                    class="form-control"
                    name="about"
                    rows="5"
                    v-model="newWork.job_description"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="editWorkFrom">From Date:</label>
                  <input
                    id="editWorkFrom"
                    class="form-control"
                    type="date"
                    v-model="newWork.from_date"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkTo">To Date:</label>
                  <input
                    id="editWorkTo"
                    class="form-control"
                    type="date"
                    v-model="newWork.to_date"
                  />
                </div>
                <div class="form-check">
                  <input
                    type="checkbox"
                    class="form-check-input"
                    id="isCurrent"
                    v-model="newWork.is_current"
                  />
                  <label class="form-check-label" for="isCurrent"
                    >Is Current.</label
                  >
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="closeEdit()"
                  >
                    <i class="fa fa-close" aria-hidden="true"></i>Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveWorkExperience(newWork)"
                  >
                    <i class="fa fa-save" aria-hidden="true"></i>Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>Skills</h6>
        </div>
        <div class="panel-info-body">
          <div class="skill-edit" v-show="isEditingSkills">
            <vue-tags-input
              v-model="skill"
              :tags="skills"
              @tags-changed="newSkills => (skills = newSkills)"
            />
          </div>
          <div class="skills" v-show="!isEditingSkills">
            <div class="skills">
              <span class="skill" v-for="skill in skills" :key="skill.text">
                {{ skill.text }}
              </span>
            </div>
          </div>
          <div class="info-actions">
            <button
              type="button"
              class="btn btn-link"
              @click="editSkills()"
              v-if="!isEditingSkills"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>Edit
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="saveSkills()"
              v-if="isEditingSkills"
            >
              <i class="fa fa-save" aria-hidden="true"></i>Save
            </button>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>Education</h6>
          <button
            class="btn btn-blank info-title"
            v-if="!isAddingEducation"
            @click="addEducation()"
          >
            <i class="fa fa-plus"></i>Add
          </button>
        </div>
        <div class="panel-info-body">
          <div class="panel-experience-full-body">
            <div
              class="experience-item"
              v-for="education in candidateProfile.educations"
              :key="education.id"
            >
              <div class="experience-image">
                <!-- <img :src="img" alt="company" /> -->
              </div>
              <div class="experience-detail">
                <div class="experience-detail-title">
                  <h6 v-show="!isEditingEducation">{{ education.name }}</h6>
                  <button
                    type="button"
                    class="btn btn-link"
                    v-if="!isEditingEducation"
                    @click="editEducation(education)"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                  </button>
                </div>
                <div class="place-container" v-show="!isEditingEducation">
                  <span>{{ education.major }}</span>
                  <span>
                    {{ education.start_date }}
                    {{
                      education.graduation_date
                        ? ` - ${education.graduation_date}`
                        : ''
                    }}
                  </span>
                </div>
                <p v-show="!isEditingEducation">{{ education.degree }}</p>
                <div v-show="isEditingEducation">
                  <div class="form-group">
                    <label for="editWorkOrganization">Name:</label>
                    <input
                      id="editWorkOrganization"
                      class="form-control"
                      type="text"
                      v-model="education.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkPosition">Major:</label>
                    <input
                      id="editWorkPosition"
                      class="form-control"
                      type="text"
                      v-model="education.major"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editDegree">Degree:</label>
                    <input
                      id="editDegree"
                      class="form-control"
                      type="text"
                      v-model="education.degree"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkDescription">Description:</label>
                    <textarea
                      id="editWorkDescription"
                      class="form-control"
                      name="about"
                      rows="5"
                      v-model="education.location"
                    ></textarea>
                  </div>
                  <div class="form-group">
                    <label for="editWorkFrom">Start Date:</label>
                    <input
                      id="editWorkFrom"
                      class="form-control"
                      type="date"
                      v-model="education.start_date"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkTo">Graduation Date:</label>
                    <input
                      id="editWorkTo"
                      class="form-control"
                      type="date"
                      v-model="education.gradutation_date"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="closeEdit()"
                    >
                      <i class="fa fa-close" aria-hidden="true"></i>Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="saveEducation(education)"
                    >
                      <i class="fa fa-save" aria-hidden="true"></i>Save
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="experience-item" v-show="isAddingEducation">
              <div class="experience-image">
                <!-- <img :src="img" alt="company" /> -->
              </div>
              <div class="experience-detail">
                <div class="form-group">
                  <label for="editWorkOrganization">Name:</label>
                  <input
                    id="editWorkOrganization"
                    class="form-control"
                    type="text"
                    v-model="newEducation.name"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkPosition">Major:</label>
                  <input
                    id="editWorkPosition"
                    class="form-control"
                    type="text"
                    v-model="newEducation.major"
                  />
                </div>
                <div class="form-group">
                  <label for="editNewDegree">Degree:</label>
                  <input
                    id="editNewDegree"
                    class="form-control"
                    type="text"
                    v-model="newEducation.degree"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkDescription">Location:</label>
                  <textarea
                    id="editWorkDescription"
                    class="form-control"
                    name="about"
                    rows="5"
                    v-model="newEducation.location"
                  ></textarea>
                </div>
                <div class="form-group">
                  <label for="editWorkFrom">Start Date:</label>
                  <input
                    id="editWorkFrom"
                    class="form-control"
                    type="date"
                    v-model="newEducation.start_date"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkTo">Graduation Date:</label>
                  <input
                    id="editWorkTo"
                    class="form-control"
                    type="date"
                    v-model="newEducation.gradutation_date"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="closeEdit()"
                  >
                    <i class="fa fa-close" aria-hidden="true"></i>Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveEducation(newEducation)"
                  >
                    <i class="fa fa-save" aria-hidden="true"></i>Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>Languages</h6>
          <button
            class="btn btn-blank info-title"
            v-if="!isAddingLanguage"
            @click="addLanguage()"
          >
            <i class="fa fa-plus"></i>Add
          </button>
        </div>
        <div class="panel-info-body">
          <div class="skills" v-show="!isEditingLanguage">
            <div class="skills" v-show="languages.length === 0">
              <p>There are no languages currently selected.</p>
            </div>
            <div v-show="!(languages.length === 0)">
              <span
                class="skill"
                v-for="language in languages"
                :key="language.id"
                >{{ language.name }}</span
              >
            </div>
          </div>
          <div class="info-actions">
            <button
              type="button"
              class="btn btn-link"
              @click="editLanguage()"
              v-if="!isEditingLanguage && languages.length > 0"
            >
              <i class="fa fa-pencil" aria-hidden="true"></i>Edit
            </button>
          </div>
          <div class="panel-experience-full-body" v-show="isEditingLanguage">
            <div class="form-group">
              <table>
                <thead>
                  <th>Languages</th>
                  <th>Level</th>
                  <th></th>
                </thead>
                <tbody>
                  <tr v-for="language in languages" :key="language.id">
                    <td style="width:150px;">
                      <div class="form-group">
                        <select v-model="language.code" class="form-control">
                          <option value="en">English</option>
                          <option value="fr">French</option>
                          <option value="de">German</option>
                          <option value="ru">Russian</option>
                          <option value="uz">uzbek</option>
                        </select>
                      </div>
                    </td>
                    <td style="width:150px;">
                      <div class="form-group">
                        <select v-model="language.level" class="form-control">
                          <option value="BG">Beginner</option>
                          <option value="IM">Intermediate</option>
                          <option value="AD">Advanced</option>
                          <option value="FT">Fluent</option>
                        </select>
                      </div>
                    </td>
                    <td>
                      <div class="form-group">
                        <button
                          type="button"
                          class="btn btn-secondary"
                          @click="closeEdit()"
                          v-if="isAddingLanguage"
                        >
                          <i class="fa fa-close" aria-hidden="true"></i>Cancel
                        </button>
                        <button
                          type="button"
                          class="btn btn-primary"
                          @click="saveLanguage(language)"
                          v-if="isEditingLanguage"
                        >
                          <i class="fa fa-save" aria-hidden="true"></i>Save
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div class="panel-experience-full-body" v-show="isAddingLanguage">
          <table>
            <thead>
              <th>Languages</th>
              <th>Level</th>
              <th></th>
            </thead>
            <tbody>
              <tr>
                <td style="width:150px;">
                  <div class="form-group">
                    <select v-model="newLanguage.lang" class="form-control">
                      <option value="en">English</option>
                      <option value="fr">French</option>
                      <option value="de">German</option>
                      <option value="ru">Russian</option>
                      <option value="uz">uzbek</option>
                    </select>
                  </div>
                </td>
                <td style="width:150px;">
                  <div class="form-group">
                    <select v-model="newLanguage.level" class="form-control">
                      <option value="BG">Beginner</option>
                      <option value="IM">Intermediate</option>
                      <option value="AD">Advanced</option>
                      <option value="FT">Fluent</option>
                    </select>
                  </div>
                </td>
                <td>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="closeEdit()"
                      v-if="isAddingLanguage"
                    >
                      <i class="fa fa-close" aria-hidden="true"></i>Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="saveLanguage()"
                      v-if="isAddingLanguage"
                    >
                      <i class="fa fa-save" aria-hidden="true"></i>Save
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div class="panel-info">
        <div class="panel-info-title">
          <h6>Awards and Certifications</h6>
          <button
            class="btn btn-blank info-title"
            v-if="!isAddingAwwards"
            @click="addAwwards()"
          >
            <i class="fa fa-plus"></i>Add
          </button>
        </div>
        <div class="panel-info-body">
          <div class="panel-experience-full-body">
            <div
              class="experience-item"
              v-for="certification in certifications"
              :key="certification.id"
            >
              <div class="experience-image">
                <!-- <img :src="img" alt="company" /> -->
              </div>
              <div class="experience-detail">
                <div class="experience-detail-title">
                  <h6 v-show="!isEditingAwwards">{{ certification.name }}</h6>
                  <button
                    type="button"
                    class="btn btn-link"
                    v-if="!isEditingAwwards"
                    @click="editAwwards(certification)"
                  >
                    <i class="fa fa-pencil" aria-hidden="true"></i>Edit
                  </button>
                </div>
                <div class="place-container">
                  <span v-show="!isEditingAwwards">
                    {{ certification.classification }}
                  </span>
                  <span>{{ certification.issue_date }}</span>
                </div>
                <p v-show="!isEditingAwwards">
                  {{ certification.issuing_authority }}
                </p>
                <div v-show="isEditingAwwards">
                  <div class="form-group">
                    <label for="editWorkOrganization">Name:</label>
                    <input
                      id="editWorkOrganization"
                      class="form-control"
                      type="text"
                      v-model="certification.name"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkPosition">Classification:</label>
                    <input
                      id="editWorkPosition"
                      class="form-control"
                      type="text"
                      v-model="certification.classification"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editIssuingAuthority">Issuing Authority:</label>
                    <input
                      id="editIssuingAuthority"
                      class="form-control"
                      type="text"
                      v-model="certification.issuing_authority"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editCertificationNumber"
                      >Certification Number:</label
                    >
                    <input
                      id="editCertificationNumber"
                      class="form-control"
                      type="text"
                      v-model="certification.cert_number"
                    />
                  </div>
                  <div class="form-group">
                    <label for="editWorkFrom">Issue Date:</label>
                    <input
                      id="editWorkFrom"
                      class="form-control"
                      type="date"
                      v-model="certification.issue_date"
                    />
                  </div>
                  <div class="form-group">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      @click="closeEdit()"
                    >
                      <i class="fa fa-close" aria-hidden="true"></i>Cancel
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      @click="saveCertification(certification)"
                    >
                      <i class="fa fa-save" aria-hidden="true"></i>Save
                    </button>
                  </div>
                </div>
                <hr />
              </div>
            </div>
            <div class="experience-item" v-show="isAddingAwwards">
              <div class="experience-image">
                <!-- <img :src="img" alt="company" /> -->
              </div>
              <div v-show="isAddingAwwards">
                <div class="form-group">
                  <label for="editWorkOrganization">Name:</label>
                  <input
                    id="editWorkOrganization"
                    class="form-control"
                    type="text"
                    v-model="newCertification.name"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkPosition">Classification:</label>
                  <input
                    id="editWorkPosition"
                    class="form-control"
                    type="text"
                    v-model="newCertification.classification"
                  />
                </div>
                <div class="form-group">
                  <label for="editIssuingAuthority">Issuing Authority:</label>
                  <input
                    id="editIssuingAuthority"
                    class="form-control"
                    type="text"
                    v-model="newCertification.issuing_authority"
                  />
                </div>
                <div class="form-group">
                  <label for="editCertificationNumber"
                    >Certification Number:</label
                  >
                  <input
                    id="editCertificationNumber"
                    class="form-control"
                    type="text"
                    v-model="newCertification.cert_number"
                  />
                </div>
                <div class="form-group">
                  <label for="editWorkFrom">Issue Date:</label>
                  <input
                    id="editWorkFrom"
                    class="form-control"
                    type="date"
                    v-model="newCertification.issue_date"
                  />
                </div>
                <div class="form-group">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    @click="closeEdit()"
                  >
                    <i class="fa fa-close" aria-hidden="true"></i>Cancel
                  </button>
                  <button
                    type="button"
                    class="btn btn-primary"
                    @click="saveCertification(newCertification)"
                  >
                    <i class="fa fa-save" aria-hidden="true"></i>Save
                  </button>
                </div>
              </div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { LEVEL, LANGUAGES } from '../../utils/constants'
import uuidv4 from 'uuid/v4'
import VueTagsInput from '@johmun/vue-tags-input'

export default {
  components: {
    VueTagsInput,
  },
  data() {
    return {
      id: null,
      isNew: false,
      isEditingContactInformation: false,
      isEditingAboutMe: false,
      isEditingWorkExperience: false,
      isAddingWorkExperience: false,
      isEditingSkills: false,
      isEditingEducation: false,
      isAddingEducation: false,
      isEditingLanguage: false,
      isAddingLanguage: false,
      isEditingAwwards: false,
      isAddingAwwards: false,
      canEdit: false,
      newWork: {
        job_title: '',
        job_description: '',
        from_date: '',
        to_date: '',
        is_current: false,
        org_location: '',
        org_name: '',
        account: this.id,
      },
      skill: '',
      skills: [],
      newEducation: {
        name: '',
        major: '',
        degree: '',
        gradutation_date: '',
        start_date: '',
        location: '',
        account: this.id,
      },
      newCertification: {
        name: '',
        classification: '',
        issue_date: '',
        issuing_authority: '',
        cert_number: '',
        account: this.id,
      },
      languageOptions: [],
      selectedLevel: null,
      newLanguage: {
        lang: '',
        level: '',
        account: this.id,
      },
    }
  },
  computed: {
    img() {
      return require('../../assets/images/company.png')
    },
    candidateProfile() {
      return this.$store.getters['candidates/candidateProfile']
    },
    educations() {
      if (
        !this.candidateProfile ||
        !this.candidateProfile.educations ||
        this.candidateProfile.educations.length <= 0
      ) {
        return []
      }
      return this.candidateProfile.educations
    },
    languages() {
      if (
        !this.candidateProfile ||
        !this.candidateProfile.languages ||
        this.candidateProfile.languages.length <= 0
      ) {
        return []
      }
      let res = this.candidateProfile.languages.map(language => {
        let langItem = this.languageOptions.filter(
          item => item.code === language.lang
        )
        return {
          id: language.id,
          code: language.lang,
          level: language.level,
          name: langItem[0].name,
        }
      })
      return res
    },
    certifications() {
      if (
        !this.candidateProfile ||
        !this.candidateProfile.certifications ||
        this.candidateProfile.certifications.length <= 0
      ) {
        return []
      }
      return this.candidateProfile.certifications
    },
  },
  created() {
    this.levels = LEVEL
    this.languageOptions = LANGUAGES
  },
  mounted() {
    this.id = this.$route.params.id ? this.$route.params.id : null
    if (!this.id) {
      ;(this.isEditingContactInformation = true),
        (this.isEditingAboutMe = true),
        (this.isEditingWorkExperience = true),
        (this.isAddingWorkExperience = true),
        (this.isEditingSkills = true),
        (this.isAddingSkills = true),
        (this.isEditingEducation = true),
        (this.isAddingEducation = true),
        (this.isEditingLanguage = true),
        (this.isAddingLanguage = true),
        (this.isEditingAwwards = true),
        (this.isAddingAwwards = true)
    }
    this.getCandidateProfile()
  },
  methods: {
    closeEdit() {
      ;(this.isEditingContactInformation = false),
        (this.isEditingAboutMe = false),
        (this.isEditingWorkExperience = false),
        (this.isAddingWorkExperience = false),
        (this.isEditingSkills = false),
        (this.isAddingSkills = false),
        (this.isEditingEducation = false),
        (this.isAddingEducation = false),
        (this.isEditingLanguage = false),
        (this.isAddingLanguage = false),
        (this.isEditingAwwards = false),
        (this.isAddingAwwards = false)
    },
    saveCandidateProfile() {
      let data = {
        id: this.id,
        account: this.id,
        profile_summary: this.candidateProfile.profile_summary,
        skills: this.skills.map(item => item['text']),
        personal_website: this.candidateProfile.personal_website,
        location: this.candidateProfile.location,
        email: this.candidateProfile.email,
        phone: this.candidateProfile.phone,
        job_title: 'Software Engineer',
      }
      if (
        this.isEditingContactInformation ||
        this.isEditingSkills ||
        this.isEditingAboutMe
      ) {
        this.$store.dispatch('candidates/editCandidateProfile', data)
      }
      if (this.isNew) {
        this.$store.dispatch('candidates/addCandidateProfile', data)
      }
      this.closeEdit()
    },
    getCandidateProfile() {
      if (this.id) {
        this.$store.dispatch('candidates/getCandidateProfile', this.id)
        this.buildSkills()
      } else {
        return null
      }
    },
    buildSkills() {
      if (
        !this.candidateProfile ||
        !this.candidateProfile.skills ||
        this.candidateProfile.skills === '[]'
      ) {
        return []
      }
      let skillsArray =
        this.candidateProfile.skills &&
        Array.isArray(this.candidateProfile.skills)
          ? this.candidateProfile.skills
          : this.candidateProfile.skills
              .replace('[', '')
              .replace(']', '')
              .replace(/'/g, '')
              .split(',')
      this.skills = skillsArray.map(skill => {
        return {
          id: uuidv4(),
          text: skill,
        }
      })
    },
    editContactInformation() {
      this.isEditingContactInformation = true
    },
    saveContactInformation() {
      this.isEditingContactInformation = false

      this.saveCandidateProfile()
    },
    editAboutMe() {
      this.isEditingAboutMe = true
    },
    saveAboutMe() {
      this.saveCandidateProfile()
    },
    addWorkExperience() {
      this.isAddingWorkExperience = true
    },
    editWorkExperience() {
      this.isEditingWorkExperience = true
    },
    saveWorkExperience(experience) {
      if (this.newWork.job_title && this.isAddingWorkExperience) {
        experience.account = this.id
        this.$store.dispatch('candidates/addCandidateExperience', experience)
        this.candidateProfile.experiences.push(this.newWork)
        this.isAddingWorkExperience = false
      }
      if (this.isEditingWorkExperience) {
        delete experience.user
        this.$store.dispatch('candidates/editCandidateExperience', experience)
        this.isEditingWorkExperience = false
      }
      this.newWork = {
        job_title: '',
        job_description: '',
        from_date: '',
        to_date: '',
        is_current: false,
        org_location: '',
        org_name: '',
        account: this.id,
      }
      this.closeEdit()
    },
    editSkills() {
      this.isEditingSkills = true
    },
    saveSkills() {
      this.saveCandidateProfile()
    },
    addEducation() {
      this.isAddingEducation = true
    },
    editEducation() {
      this.isEditingEducation = true
    },
    saveEducation(education) {
      if (this.newEducation.name && this.isAddingEducation) {
        education.account = this.id
        this.$store.dispatch('candidates/addCandidateEducation', education)
        this.candidateProfile.educations.push(this.newEducation)
        this.isAddingEducation = false
      }
      if (this.isEditingEducation) {
        delete education.user
        this.$store.dispatch('candidates/editCandidateEducation', education)
        this.isEditingEducation = false
      }
      this.newEducation = {
        name: '',
        major: '',
        degree: '',
        gradutation_date: '',
        start_date: '',
        location: '',
        account: this.id,
      }
      this.closeEdit()
    },
    editLanguage() {
      this.isEditingLanguage = true
    },
    addLanguage() {
      this.isAddingLanguage = true
    },
    saveLanguage(language) {
      this.newLanguage.account = this.id
      if (this.isAddingLanguage && this.newLanguage) {
        this.$store.dispatch(
          'candidates/addCandidateLanguage',
          this.newLanguage
        )
        this.isAddingLanguage = false
      }
      if (this.isEditingLanguage) {
        let lang = {
          id: language.id,
          account: this.id,
          lang: language.code,
          level: language.level,
        }
        this.$store.dispatch('candidates/editCandidateLanguage', lang)
        this.isEditingLanguage = false
      }
      this.newLanguage = {
        lang: '',
        level: '',
        account: this.id,
      }
      this.closeEdit()
    },
    editAwwards() {
      this.isEditingAwwards = true
    },
    addAwwards() {
      this.isAddingAwwards = true
    },
    saveCertification(certification) {
      if (this.newCertification.name && this.isAddingAwwards) {
        certification.account = this.id
        this.$store.dispatch(
          'candidates/addCandidateCertification',
          certification
        )
        this.candidateProfile.educations.push(this.newCertification)
        this.isAddingAwwards = false
      }
      if (this.isEditingAwwards) {
        delete certification.user
        this.$store.dispatch(
          'candidates/editCandidateCertification',
          certification
        )
        this.isEditingAwwards = false
      }
      this.newCertification = {
        name: '',
        classification: '',
        issue_date: '',
        issuing_authority: '',
        cert_number: '',
        account: this.id,
      }
      this.closeEdit()
    },
    addFile(target) {
      let file = target.files[0]
      this.$store.dispatch('candidates/addCandidateResume', {
        id: this.id,
        account: this.id,
        profile_summary: this.candidateProfile.profile_summary,
        email: this.candidateProfile.email,
        location: this.candidateProfile.location,
        phone: this.candidateProfile.phone,
        personal_website: this.candidateProfile.personal_website,
        resume: file,
        skills: this.skills,
      })
      this.closeEdit()
    },
  },
}
</script>

<style lang="scss" scoped>
#contactResume {
  display: none;
}

.primary {
  color: #00b4e3;
}

.candidates-body {
  display: flex;
  margin: 0 40px;
  .candidates-contact {
    width: 210px;
    margin-right: 40px;
  }
  .candidates-content {
    width: calc(100% - 210px);
  }
  .skills {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    .skill {
      background: #3cb1e5;
      border-radius: 4px;
      color: #ffffff;
      margin-left: 10px;
      padding: 5px 10px;
    }
  }
  .place-container {
    display: flex;
    justify-content: space-between;
  }
  .contact-list-information {
    list-style: none;
    font-size: 12px;
    padding-left: 0;
  }
  .panel-info-title,
  .experience-detail-title {
    display: flex;
    justify-content: space-between;
    a {
      color: #00b4e3;
    }
  }
  .experience-detail-title {
    align-items: center;
    h6 {
      text-transform: capitalize;
    }
  }
}

.btn-secondary {
  margin-right: 10px;
}
</style>
