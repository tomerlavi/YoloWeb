declare var vCard: () => {
    /**
     * Specifies a value that represents a persistent, globally unique identifier associated with the vCard
     * @type {String}
     */
    uid: string;
    /**
     * Date of birth
     * @type {Datetime}
     */
    birthday: string;
    /**
     * Cell phone number
     * @type {String}
     */
    cellPhone: string;
    /**
     * Other cell phone number or pager
     * @type {String}
     */
    pagerPhone: string;
    /**
     * The address for private electronic mail communication
     * @type {String}
     */
    email: string;
    /**
     * The address for work-related electronic mail communication
     * @type {String}
     */
    workEmail: string;
    /**
     * First name
     * @type {String}
     */
    firstName: string;
    /**
     * Formatted name string associated with the vCard object (will automatically populate if not set)
     * @type {String}
     */
    formattedName: string;
    /**
     * Gender.
     * @type {String} Must be M or F for Male or Female
     */
    gender: string;
    /**
     * Home mailing address
     * @type {object}
     */
    homeAddress: {
        /**
         * Represents the actual text that should be put on the mailing label when delivering a physical package
         * @type {String}
         */
        label: string;
        /**
         * Street address
         * @type {String}
         */
        street: string;
        /**
         * City
         * @type {String}
         */
        city: string;
        /**
         * State or province
         * @type {String}
         */
        stateProvince: string;
        /**
         * Postal code
         * @type {String}
         */
        postalCode: string;
        /**
         * Country or region
         * @type {String}
         */
        countryRegion: string;
    };
    /**
     * Home phone
     * @type {String}
     */
    homePhone: string;
    /**
     * Home facsimile
     * @type {String}
     */
    homeFax: string;
    /**
     * Last name
     * @type {String}
     */
    lastName: string;
    /**
     * Logo
     * @type {object}
     */
    logo: string;
    /**
     * Middle name
     * @type {String}
     */
    middleName: string;
    /**
     * Prefix for individual's name
     * @type {String}
     */
    namePrefix: string;
    /**
     * Suffix for individual's name
     * @type {String}
     */
    nameSuffix: string;
    /**
     * Nickname of individual
     * @type {String}
     */
    nickname: string;
    /**
     * Specifies supplemental information or a comment that is associated with the vCard
     * @type {String}
     */
    note: string;
    /**
     * The name and optionally the unit(s) of the organization associated with the vCard object
     * @type {String}
     */
    organization: string;
    /**
     * Individual's photo
     * @type {object}
     */
    photo: string;
    /**
     * The role, occupation, or business category of the vCard object within an organization
     * @type {String}
     */
    role: string;
    /**
     * Social URLs attached to the vCard object (ex: Facebook, Twitter, LinkedIn)
     * @type {String}
     */
    socialUrls: {
        facebook: string;
        linkedIn: string;
        twitter: string;
        flickr: string;
    };
    /**
     * A URL that can be used to get the latest version of this vCard
     * @type {String}
     */
    source: string;
    /**
     * Specifies the job title, functional position or function of the individual within an organization
     * @type {String}
     */
    title: string;
    /**
     * URL pointing to a website that represents the person in some way
     * @type {String}
     */
    url: string;
    /**
     * URL pointing to a website that represents the person's work in some way
     * @type {String}
     */
    workUrl: string;
    /**
     * Work mailing address
     * @type {object}
     */
    workAddress: {
        /**
         * Represents the actual text that should be put on the mailing label when delivering a physical package
         * @type {String}
         */
        label: string;
        /**
         * Street address
         * @type {String}
         */
        street: string;
        /**
         * City
         * @type {String}
         */
        city: string;
        /**
         * State or province
         * @type {String}
         */
        stateProvince: string;
        /**
         * Postal code
         * @type {String}
         */
        postalCode: string;
        /**
         * Country or region
         * @type {String}
         */
        countryRegion: string;
    };
    /**
     * Work phone
     * @type {String}
     */
    workPhone: string;
    /**
     * Work facsimile
     * @type {String}
     */
    workFax: string;
    /**
     * vCard version
     * @type {String}
     */
    version: string;
    /**
     * Get major version of the vCard format
     * @return {integer}
     */
    getMajorVersion: () => number;
    /**
     * Get formatted vCard
     * @return {String} Formatted vCard in VCF format
     */
    getFormattedString: () => string;
};
export default vCard;
