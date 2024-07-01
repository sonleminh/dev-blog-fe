export async function POST(request: Request) {
  // const res = await request.json();
  // return Response.json({ res });
  const res = await request.json();
  // console.log(res);
  const sessionToken = res.user.accessToken;

  console.log('auth:', sessionToken);
  if (!sessionToken) {
    return Response.json(
      { message: 'Can not get session token' },
      {
        status: 400,
      }
    );
  }
  return Response.json(
    { res },
    {
      status: 200,
      headers: {
        'Set-Cookie': `sessionToken=${sessionToken}; Path=/; HttpOnly`,
      },
    }
  );
}
