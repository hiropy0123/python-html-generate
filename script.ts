import { writeFile } from "fs";
import { PageData } from "./types";
// データのインポート
import { sampleA } from "./data/pages/sample-a";
import { sampleB } from "./data/pages/sample-b";

// 配列に入れる
const data: PageData[] = [sampleA, sampleB];

// JSONデータのファイルとして書き出し
writeFile('data.json', JSON.stringify(data, null, "  "), () => {});