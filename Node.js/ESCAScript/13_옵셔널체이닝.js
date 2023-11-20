const user = {
    id: 1,
    username: 'john_doe',
    profile: {
        email: 'john@example.com',
        address: {
        city: 'New York'
      }
    }
  };
  
  // 중첩된 프로퍼티에 안전하게 접근
  const city = user?.profile?.address?.city;
  console.log(city); // 출력: 'New York'
  
  const nonExistentProperty = user?.nonExistentProperty;
  console.log(nonExistentProperty); // 출력: undefined