const Tracking = {
  trigger: eventData => {
    try {
      var _paq = window._paq || [];

      _paq.push(eventData);
    } catch (e) {
      throw Error(e);
    }
  },

  quizStarted: () => {
    Tracking.trigger(['trackEvent', 'mobileApp', 'quiz', 'created']);
  },

  quizEnded: timeNeeded => {
    if( timeNeeded >= 3600 )
    {
        return;
    }
    Tracking.trigger(['trackEvent', 'mobileApp', 'quiz', 'finished']);
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'quiz',
      'quizDuration',
      timeNeeded,
    ]);
  },

  themeSelected: theme => {
    Tracking.trigger(['trackEvent', 'mobileApp', 'themeChosen', theme.value]);
  },

  categorySelected: (theme, category) => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'catChosen',
      theme.value + ' - ' + category,
    ]);
  },
  knowMoreTriggered: (type, contentId) => {
    Tracking.trigger(['trackEvent', 'mobileApp', 'knowMore', type, contentId]);
  },

  questionAnswered: (questionTitle, timeNeeded) => {
    if( timeNeeded >= 3600 )
    {
        return;
    }
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'questionAnswered',
      questionTitle, 
    ]);
    
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'questionDuration',
      questionTitle,           
      timeNeeded,
    ]);
  },
  
  questionRightAnswered: (questionTitle) => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'questionRightAnswered',
      questionTitle,   
    ]);  
  },
  
  under25: () => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      '-25 ans',
    ]);  
  },
  
  above25: () => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      '+25 ans',
    ]);  
  },
  
  contactClicked: () => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'Contact',
    ]);    
  },
  
  lieuxUtilesClicked: () => {
    Tracking.trigger([
      'trackEvent',
      'mobileApp',
      'Lieux Utiles',
    ]);    
  },
  
  
};
export default Tracking;
