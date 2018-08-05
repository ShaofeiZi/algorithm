
#include <iostream>

using namespace std;

int main()
{
	const int n = 64;
	int x = 4;
	int y = 2;
	int M[n][n];

	 // 方法1:
	// 判断i和j是否相等  如果相等 证明在中间
	//for (int i = 0; i < n; ++i) {
	//	for (int j = 0; j < n; ++j) {
	//		if (i == j) {
	//			M[i][j] = x;
	//		}
	//		else {
	//			M[i][j] = y;
	//		}
	//	}
	//}
	

	// 方法2:
	//先全部填充 然后再覆盖 中间的
	//for (int i = 0; i < n; ++i) {
	//	for (int j = 0; j < n; ++j) {
	//		M[i][j] = y;
	//	}
	//}
	//for (int i = 0; i < n; ++i) {
	//	M[i][i] = x;
	//}


	// 方法3: 先填充左边的 再填充中间的 最后填充右边的
	for (int i = 0; i < n; ++i)
	{
		for (int j = 0; j < i; ++j) {
			M[i][j] = y;
		}
		M[i][i] = x;
		for (int j = i + 1; j < n; ++j) {
			M[i][j] = y;
		}
	}

	// 在屏幕上输出.
	for (int i = 0; i < n; ++i)
	{
		for (int j = 0; j < n; ++j) {
			cout << M[i][j];
		}
		cout << endl;
	}
	system("pause");
	return 0;
}
