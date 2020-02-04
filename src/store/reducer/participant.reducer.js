import short from 'short-uuid';
import { ADD, DELETE, UPDATE, SORT } from '../actions/participant.actions';

const data = [{ "name": "Adrienne", "email": "akairns0@hc360.com", "phoneNumber": "703266043747" },
{ "name": "Susie", "email": "sdufour1@desdev.cn", "phoneNumber": "792902056101" },
{ "name": "Taddeo", "email": "tcuppleditch2@diigo.com", "phoneNumber": "757983148156" },
{ "name": "Malvina", "email": "morriss3@dot.gov", "phoneNumber": "397654113397" },
{ "name": "Erina", "email": "ejaycock4@npr.org", "phoneNumber": "268311638741" },
{ "name": "Boniface", "email": "bpetrello5@last.fm", "phoneNumber": "302470577032" },
{ "name": "Odo", "email": "otodeo6@earthlink.net", "phoneNumber": "603804724391" },
{ "name": "Yehudi", "email": "ypreece7@t.co", "phoneNumber": "534610310626" },
{ "name": "Eulalie", "email": "emckeller8@phoca.cz", "phoneNumber": "269221837140" },
{ "name": "Birdie", "email": "bfullard9@icq.com", "phoneNumber": "755094733260" },
{ "name": "Raynell", "email": "rcroxleya@aol.com", "phoneNumber": "872059313917" },
{ "name": "Shaylyn", "email": "shanrattyb@acquirethisname.com", "phoneNumber": "924337232680" },
{ "name": "Ollie", "email": "olawc@skype.com", "phoneNumber": "150110684043" },
{ "name": "Tab", "email": "tringed@macromedia.com", "phoneNumber": "656006820146" },
{ "name": "Frannie", "email": "fpiepere@netscape.com", "phoneNumber": "074785549925" },
{ "name": "Robyn", "email": "rsterref@cargocollective.com", "phoneNumber": "541799039052" },
{ "name": "Ettore", "email": "ecaberasg@delicious.com", "phoneNumber": "913727837088" },
{ "name": "Arabella", "email": "aghiraldih@pen.io", "phoneNumber": "699893638774" },
{ "name": "Jocko", "email": "jbudgeni@ycombinator.com", "phoneNumber": "071745948204" },
{ "name": "Easter", "email": "egeorgesonj@craigslist.org", "phoneNumber": "714129278484" }]



const INIT_STATE = {
  participants: data.map(d => ({ ...d, id: short.generate() })),
  edit: {
    id: ''
  },
  sort: {
    sortBy: 'name',
    sortOrder: 'asc'
  }
}

export default (state = INIT_STATE, action) => {
  switch (action.type) {

    case ADD: {
      return { ...state, participants: [...state.participants, { ...action.payload, id: short.generate() }] }
    }

    case DELETE: {
      const remaining = state.participants.filter(p => p.id !== action.payload);
      return { ...state, participants: remaining }
    }

    case UPDATE: {
      const remaining = state.participants.filter(p => p.id !== action.payload.id);
      return { ...state, participants: [...remaining, action.payload] }
    }

    case SORT: {
      return { ...state, sort: action.payload }
    }

    default: return state;
  }
}

