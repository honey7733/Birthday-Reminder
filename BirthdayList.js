import React from 'react';

function BirthdayList({ birthdays, removeBirthday }) {
  const yourBirthday = {
    name: '',
    date: '', 
    image: '',

  }
;
  const allBirthdays = [yourBirthday, ...birthdays];

  return (
    <div className="birthday-list">
      {allBirthdays.map((birthday, index) => {
        const birthDate = new Date(birthday.date);
        const today = new Date();

        if (birthDate.getDate() === today.getDate() && birthDate.getMonth() === today.getMonth()) {
          return (
            <div key={index} className="birthday">
              <div className="birthday-details">
                <img src={birthday.image} alt={`${birthday.name}'s Image`} />
                <div>
                  <p>{birthday.name}</p>
                  <p>{birthday.date}</p>
                  <p>Happy birthday! May God bless you!</p>
                </div>
                <button onClick={() => removeBirthday(birthday.name)}>Remove</button>
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="birthday">
            <div className="birthday-details">
              <img src={birthday.image} 
              alt={`${birthday.name}'s Image`} 
              style={{width:'400px',height:'350px'}}
              />
              <div>
                <p>{birthday.name}</p>
                <p>{birthday.date}</p>
              </div>
              <button onClick={() => removeBirthday(birthday.name)}>Remove</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default BirthdayList;